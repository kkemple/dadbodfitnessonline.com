import React from "react";
import { Box } from "@chakra-ui/core";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

export default ({ children, as = "section" }) => {
  const data = useStaticQuery(graphql`
    query Section {
      bg: file(relativePath: { eq: "wood-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Box position="relative">
      <Image
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          objectFit: "cover",
          zIndex: -1,
        }}
        fluid={data.bg.childImageSharp.fluid}
      />
      {children}
    </Box>
  );
};
