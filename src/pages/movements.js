import React, { useState } from "react";
import { Box, SimpleGrid, Flex, Heading, Input } from "@chakra-ui/core";
import styled from "@emotion/styled";

import Header from "../components/header";
import Footer from "../components/footer";
import WoodSection from "../components/wood-section";
import NewsletterSignup from "../components/newsletter";

const Embed = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

const EmbedContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: calc(100% / (16 / 9));
`;

export default ({ data }) => {
  const [filter, setFilter] = useState("");
  const videos = data.allYoutubeVideo.edges;

  return (
    <>
      <Header />
      <WoodSection>
        <Flex
          align="center"
          justify="center"
          minH="400px"
          p={["24px", "36px", "48px"]}
          maxW="1280px"
          mx="auto"
        >
          <Heading
            as="h2"
            fontSize="64px"
            letterSpacing="0.15rem"
            color="white"
          >
            Movements
          </Heading>
        </Flex>
      </WoodSection>
      <Box maxW="640px" mx="auto" p="24px" mt="24px">
        <Input
          type="text"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          placeholder="Search Videos..."
          borderColor="black"
          borderRadius="none"
        />
      </Box>
      <SimpleGrid
        display={["block", "block", "grid"]}
        maxW="1280px"
        mx="auto"
        w="full"
        columns={[1, 2, 2, 3]}
        px="24px"
        pt="24px"
        pb="48px"
        gap={10}
      >
        {videos
          .filter(({ node }) =>
            node.title.toLowerCase().includes(filter.toLowerCase())
          )
          .map(({ node }) => (
            <Box
              p={["16px", null, "24px"]}
              borderWidth="1px"
              borderColor="#000000"
              boxShadow="-1px 1px 0 0 black, -2px 2px 0 0 black, -3px 3px 0 0 black, -4px 4px 0 0 black, -5px 5px 0 0 black, -6px 6px 0 0 black"
              mb={["24px", "24px", "0"]}
            >
              <EmbedContainer>
                <Embed
                  src={`https://www.youtube.com/embed/${node.videoId}`}
                  frameborder="0"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </EmbedContainer>
              <Heading letterSpacing="0.15rem" size="sm" mt="8px">
                {node.title}
              </Heading>
            </Box>
          ))}
      </SimpleGrid>
      <WoodSection>
        <Flex
          h="400px"
          align="center"
          justify="center"
          py="64px"
          px={["16px", "24px", "32px", "40px"]}
        >
          <Box
            width="480px"
            backgroundColor="white"
            p="16px"
            borderWidth="1px"
            borderColor="#000000"
            boxShadow="-1px 1px 0 0 black, -2px 2px 0 0 black, -3px 3px 0 0 black, -4px 4px 0 0 black, -5px 5px 0 0 black, -6px 6px 0 0 black"
          >
            <NewsletterSignup />
          </Box>
        </Flex>
      </WoodSection>
      <Footer />
    </>
  );
};

export const pageQuery = graphql`
  query MovementsPage {
    allYoutubeVideo {
      edges {
        node {
          description
          title
          videoId
        }
      }
    }
  }
`;
