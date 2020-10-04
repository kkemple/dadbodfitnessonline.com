import React from "react";
import { navigate } from "gatsby";
import { SimpleGrid, Flex, Heading, Text, Code } from "@chakra-ui/core";
import styled from "@emotion/styled";
import { graphql } from "gatsby";

import Header from "../components/header";
import Footer from "../components/footer";
import { useAuth0 } from "../../utils/auth";
import WoodSection from "../components/wood-section";

const isBrowser = typeof window !== "undefined";

const Link = styled.a`
  font-weight: bold;
`;

export default ({ data }) => {
  if (!isBrowser) return null;

  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    navigate("/register");
    return null;
  }

  return (
    <>
      <Header />
      <WoodSection>
        <Flex
          align="center"
          justify="center"
          minH="400px"
          p={["24px", "36px", "48px"]}
          maxW="1080px"
          mx="auto"
        >
          <Heading
            as="h2"
            fontSize="64px"
            letterSpacing="0.15rem"
            color="white"
          >
            Ditch the Dadbod Faster with these Deals
          </Heading>
        </Flex>
      </WoodSection>
      <SimpleGrid
        display={["block", "block", "grid"]}
        maxW="1280px"
        mx="auto"
        w="full"
        columns={[1, 1, 2]}
        px="24px"
        py="48px"
        gap={10}
      >
        {data.allContentfulPartnership.edges.map(({ node }) => (
          <Flex
            key={node.company}
            direction="column"
            justify="space-between"
            minH={["300px", null, "400px"]}
            p={["16px", "24px", "48px"]}
            borderWidth="1px"
            borderColor="#000000"
            boxShadow="-1px 1px 0 0 black, -2px 2px 0 0 black, -3px 3px 0 0 black, -4px 4px 0 0 black, -5px 5px 0 0 black, -6px 6px 0 0 black"
            mb={["24px", "24px", "0"]}
          >
            <Heading>{node.company}</Heading>
            <Text fontSize="18px" fontStyle="italic">
              {node.explainer.explainer}
            </Text>
            <Text>
              Use code{" "}
              <Code fontSize="18px">
                <b>{node.code}</b>
              </Code>
            </Text>
            <Link target="_blank" rel="noopener noreferrer" href={node.link}>
              {node.link}
            </Link>
          </Flex>
        ))}
      </SimpleGrid>
      <Footer />
    </>
  );
};

export const query = graphql`
  query Partnerships {
    allContentfulPartnership {
      edges {
        node {
          company
          link
          explainer {
            explainer
          }
          code
        }
      }
    }
  }
`;
