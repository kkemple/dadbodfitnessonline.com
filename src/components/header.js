import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";
import Image from "gatsby-image";
import { Box, Flex, Stack, Button, Icon } from "@chakra-ui/core";
import styled from "@emotion/styled";

const NavList = styled(Stack)`
  list-style: none;
`;

const NavListItem = styled(Box)`
  margin-left: 8px;
  font-family: "Bebas Neue";
  letter-spacing: 0.15rem;

  & .active {
    border-bottom: 3px solid black;
  }
`;

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
        <Link to="/">
          <Image
            style={{
              width: 60,
            }}
            fluid={data.logo.childImageSharp.fluid}
            alt={title}
          />
        </Link>
        <Box as="nav" flex="1" mr="16px">
          <NavList
            isInline
            spacing={2}
            as="ul"
            justify="flex-end"
            align="center"
          >
            <NavListItem mt="4px">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://cfkrypton.myshopify.com/"
              >
                Shop
                <Icon name="external-link" style={{ display: "inline" }} />
              </a>
            </NavListItem>
            <NavListItem mt="4px">
              <Link activeClassName="active" to="/sample-workouts">
                Samples
              </Link>
            </NavListItem>
            <NavListItem mt="4px">
              <Link activeClassName="active" to="/sign-up">
                Sign Up
              </Link>
            </NavListItem>
            <NavListItem>
              <Button letterSpacing="0.15rem" variantColor="black" size="sm">
                Login
              </Button>
            </NavListItem>
          </NavList>
        </Box>
      </Flex>
    </>
  );
};
