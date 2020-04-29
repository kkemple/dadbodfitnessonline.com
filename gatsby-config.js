module.exports = {
  siteMetadata: {
    title: "Dadbod Fitness Online",
    siteUrl: "https://dadbodfitnessonline.com",
    description: `This program is for anyone who is looking to get strong and/or stay fit. What sets us apart from toher "at home" programs is that we offer a daily fitness workout of the day (DADFIT) and a daily strenght workout of the day (DADPUMP). You've got the option to do both or pick one if you're crunched for time.`,
    image: "/src/images/social.jpg",
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-source-google-docs",
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-images"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://dadbodfitnessonline.us19.list-manage.com/subscribe/post?u=c6746d6a7db452b91cd622a3e&amp;id=fc59c5445c",
      },
    },
    {
      resolve: "gatsby-source-instagram",
      options: {
        username: "dadbodfitnessonline",
      },
    },
    {
      resolve: "gatsby-source-youtube-v2",
      options: {
        channelId: ["UCiy0fiXZNhIjj9tjbPlPsMQ"],
        apiKey: process.env.YOUTUBE_API_KEY,
      },
    },
  ],
};
