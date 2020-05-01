const ypi = require("youtube-playlist-info");
const crypto = require("crypto");

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    /*
     * During the build step, `auth0-js` will break because it relies on
     * browser-specific APIs. Fortunately, we don’t need it during the build.
     * Using Webpack’s null loader, we’re able to effectively ignore `auth0-js`
     * during the build. (See `src/utils/auth.js` to see how we prevent this
     * from breaking the app.)
     */
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /auth0-spa-js/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;

  let quickTipsNode = {
    id: "quickTipsPlaylist",
    parent: "youtubePlaylists",
    children: [],
    internal: {
      type: "youtubePlaylist",
    },
  };

  const makeNode = (node) => {
    node.internal.contentDigest = crypto
      .createHash("md5")
      .update(JSON.stringify(node))
      .digest("hex");

    createNode(node);
  };

  const playlist = "PLlPxOiMnnlNqu_JJVHCxUkafQRnWMkiz1";

  const videos = await ypi(process.env.YOUTUBE_API_KEY, playlist);

  quickTipsNode.children = videos.map((video) => {
    const id = `youtubeVideo-${video.resourceId.videoId}`;
    makeNode({
      id,
      title: video.title,
      description: video.description,
      thumbnails: video.thumbnails,
      position: video.position,
      videoId: video.resourceId.videoId,
      internal: {
        type: "youtubeVideo",
      },
      parent: "quickTipsPlaylist",
      children: [],
    });
    return id;
  });
};
