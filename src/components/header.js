import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";
import Image from "gatsby-image";
import { Flex } from "@chakra-ui/core";

export default ({ title }) => {
  const data = useStaticQuery(graphql`
    query Header {
      site {
        siteMetadata {
          title
          description
          image
        }
      }
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 60) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const { title: defaultTitle, description, image } = data.site.siteMetadata;

  return (
    <>
      <Helmet title={title || defaultTitle}>
        <meta name="description" content={description} />
        <meta name="og:image" content={image} />
      </Helmet>
      <Flex
        as="header"
        p="4px"
        position="relative"
        justify="space-between"
        align="center"
        backgroundColor="white"
      >
        <Image
          style={{
            width: 60,
          }}
          fluid={data.logo.childImageSharp.fluid}
          alt={title}
        />
      </Flex>
    </>
  );
};
