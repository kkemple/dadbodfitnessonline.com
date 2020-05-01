import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";
import Image from "gatsby-image";
import { Box, Flex, Stack, Button } from "@chakra-ui/core";
import styled from "@emotion/styled";

import { useAuth0 } from "../../utils/auth";

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

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

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
        <Box as="nav" flex="1">
          <NavList
            isInline
            spacing={[1, 2]}
            as="ul"
            justify="flex-end"
            align="center"
          >
            {!isAuthenticated && (
              <NavListItem mt="4px">
                <Link activeClassName="active" to="/sample-workouts">
                  Samples
                </Link>
              </NavListItem>
            )}
            <NavListItem mt="4px">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://cfkrypton.myshopify.com/"
              >
                Shop
              </a>
            </NavListItem>
            {!isAuthenticated && (
              <NavListItem mt="4px">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.bensmithblueprint.com/programs/"
                >
                  Join
                </a>
              </NavListItem>
            )}
            {isAuthenticated && (
              <>
                <NavListItem mt="4px">
                  <Link activeClassName="active" to="/movements">
                    Movements
                  </Link>
                </NavListItem>
                <NavListItem mt="4px">
                  <Link activeClassName="active" to="/workouts">
                    Workouts
                  </Link>
                </NavListItem>
              </>
            )}
            <NavListItem mt="4px">
              <Link activeClassName="active" to="/partnerships">
                {isAuthenticated ? "Partnerships" : "Members"}
              </Link>
            </NavListItem>
            <NavListItem>
              {isAuthenticated && (
                <Button
                  letterSpacing="0.15rem"
                  variantColor="black"
                  size="sm"
                  onClick={isAuthenticated ? logout : loginWithRedirect}
                >
                  {isAuthenticated ? "Logout" : "Members"}
                </Button>
              )}
            </NavListItem>
          </NavList>
        </Box>
      </Flex>
    </>
  );
};
