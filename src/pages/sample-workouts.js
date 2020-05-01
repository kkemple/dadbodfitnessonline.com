import React from "react";
import { graphql } from "gatsby";
import { SimpleGrid, Heading, Flex, Box, Button, Icon } from "@chakra-ui/core";
import { css } from "@emotion/core";

import Header from "../components/header";
import Footer from "../components/footer";
import NewsletterSignup from "../components/newsletter";
import WoodSection from "../components/wood-section";

const WorkoutsForDay = ({ day }) => (
  <SimpleGrid
    maxW="1280px"
    columns={[1, 2, 3]}
    gap={["24px", null, "48px"]}
    mx="auto"
    css={css`
      font-size: 14px;

      p {
        margin-bottom: 16px;
      }

      ul {
        margin-bottom: 16px;
        list-style: square;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: Bebas Neue;
        letter-spacing: 0.1rem;
        margin-bottom: 8px;
        font-size: 18px;
      }

      h4 {
        font-size: 20px;
      }

      h5 {
        font-size: 18px;
      }

      note {
        font-size: 10px;
        font-style: italic;
        font-weight: bold;
      }
    `}
  >
    {day.edges.map(({ node }) => (
      <Box
        key={node.id}
        borderWidth="1px"
        borderColor="#000000"
        boxShadow="-1px 1px 0 0 black, -2px 2px 0 0 black, -3px 3px 0 0 black, -4px 4px 0 0 black, -5px 5px 0 0 black, -6px 6px 0 0 black"
        p="24px"
        flex="1"
      >
        <Heading as="h4" size="lg" fontWeight="bold">
          {node.childMarkdownRemark.frontmatter.name}
        </Heading>
        <Box
          dangerouslySetInnerHTML={{
            __html: node.childMarkdownRemark.html,
          }}
        />
      </Box>
    ))}
  </SimpleGrid>
);

export default ({ data }) => {
  return (
    <>
      <Header />
      <main>
        <WoodSection>
          <Flex
            align="center"
            justify="center"
            p={["24px", "36px", "48px"]}
            maxW="1080px"
            mx="auto"
            minH="400px"
          >
            <Heading
              as="h2"
              fontSize="64px"
              letterSpacing="0.15rem"
              color="white"
            >
              Not Convinced Yet? Why Not Try a Few Workouts.
            </Heading>
          </Flex>
        </WoodSection>
        <Box as="section" py="48px" px="24px">
          <Heading
            mb="24px"
            letterSpacing="0.15rem"
            as="h3"
            textAlign="center"
            size="2xl"
          >
            3 Days of Dadbod
          </Heading>
          <Heading as="h4" textAlign="center" mb="16px">
            Day 1
          </Heading>
          <WorkoutsForDay day={data.day1} />
          <Heading mt="64px" as="h4" textAlign="center" mb="16px">
            Day 2
          </Heading>
          <WorkoutsForDay day={data.day2} />
          <Heading mt="64px" as="h4" textAlign="center" mb="16px">
            Day 3
          </Heading>
          <WorkoutsForDay day={data.day3} />
        </Box>
        <Flex my="48px" justify="center" align="center">
          <Button
            as="a"
            href="https://www.youtube.com/watch?v=ZLfhuouegOs&list=PLlPxOiMnnlNqu_JJVHCxUkafQRnWMkiz1"
            variant="outline"
            variantColor="black"
            borderRadius="none"
            boxShadow="-1px 1px 0 0 black, -2px 2px 0 0 black, -3px 3px 0 0 black, -4px 4px 0 0 black, -5px 5px 0 0 black, -6px 6px 0 0 black"
            p="24px"
            target="_blank"
            rel="noopener noreferrer"
          >
            Movement Demos <Icon ml="8px" name="arrow-forward" />
          </Button>
        </Flex>
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
      </main>
      <Footer />
    </>
  );
};

export const query = graphql`
  query SamplesPage {
    bg: file(relativePath: { eq: "wood-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    day1: allGoogleDocs(
      sort: { fields: [document___name] }
      filter: { document: { path: { regex: "/samples/day-1/" } } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              name
            }
            html
          }
        }
      }
    }
    day2: allGoogleDocs(
      sort: { fields: [document___name] }
      filter: { document: { path: { regex: "/samples/day-2/" } } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              name
            }
            html
          }
        }
      }
    }
    day3: allGoogleDocs(
      sort: { fields: [document___name] }
      filter: { document: { path: { regex: "/samples/day-3/" } } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              name
            }
            html
          }
        }
      }
    }
  }
`;
