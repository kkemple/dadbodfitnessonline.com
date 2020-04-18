import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Image from "gatsby-image";
import addToMailchimp from "gatsby-plugin-mailchimp";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { result } = await addToMailchimp(email);
      alert("Thanks for signing up!");
      setEmail("");
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{ fontSize: 36, fontFamily: "Bebas Neue" }}>
        Stay informed, sign up for the newsletter!
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 24,
          background: "#efefef",
          borderRadius: 5,
        }}
      >
        <input
          style={{
            padding: "8px 16px",
            outline: "none",
            flex: "1",
          }}
          placeholder="Email address"
          name="email"
          type="text"
          value={email}
          onChange={handleEmailChange}
        />
        <button style={{ padding: 8 }} type="submit">
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default ({ data }) => {
  const mediaMatch = window.matchMedia("(max-width: 500px)");
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  }, [matches, setMatches]);

  const { title, description, image } = data.site.siteMetadata;
  return (
    <>
      <Helmet title={title}>
        <meta name="description" content={description} />
        <meta name="og:image" content={image} />
      </Helmet>
      <Image
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          objectFit: "cover",
          transform: "scale(1.1)",
          zIndex: -1,
        }}
        fluid={data.bg.childImageSharp.fluid}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          minHeight: "100vh",
          margin: -8,
        }}
      >
        <header style={{ position: "relative" }}>
          <Image
            style={{
              width: 100,
            }}
            fluid={data.logo.childImageSharp.fluid}
            alt={title}
          />
        </header>
        <main
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <div
            style={{
              marginTop: -75,
              width: "480px",
              background: "white",
              padding: 24,
              borderRadius: 10,
              boxShadow: "2px 2px rgba(0,0,0,0.3)",
              marginLeft: matches ? 16 : "auto",
              marginRight: matches ? 16 : "auto",
            }}
          >
            <NewsletterSignup />
          </div>
        </main>
      </div>
    </>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        image
      }
    }
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bg: file(relativePath: { eq: "wood-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
