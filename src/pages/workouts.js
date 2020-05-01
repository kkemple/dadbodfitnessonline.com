import React from "react";
import { Link, navigate } from "gatsby";
import {
  SimpleGrid,
  Flex,
  Heading,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Icon,
  Text,
} from "@chakra-ui/core";
import { css } from "@emotion/core";

import Header from "../components/header";
import Footer from "../components/footer";
import { useAuth0 } from "../../utils/auth";
import WoodSection from "../components/wood-section";
import NewsletterSignup from "../components/newsletter";

const isBrowser = typeof window !== "undefined";

const WorkoutsForDay = ({ day }) => (
  <SimpleGrid
    maxW="1280px"
    columns={[1, 2, 3]}
    gap={["24px", null, "48px"]}
    mx="auto"
    my="48px"
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
            {/* No Time, No Problem. Here's the Workouts for the Week. */}
            New Workouts Coming May 4th!
          </Heading>
        </Flex>
      </WoodSection>
      {/*<Box as="section" py="48px" px="24px">
        <Heading
          mb="24px"
          letterSpacing="0.15rem"
          as="h3"
          textAlign="center"
          size="2xl"
        >
          6 Days of Dadbod
        </Heading>
        <Tabs variantColor="black">
          <TabList>
            <Tab fontFamily="Bebas Neue" letterSpacing="0.15rem">
              Day 1
            </Tab>
            <Tab fontFamily="Bebas Neue" letterSpacing="0.15rem">
              Day 2
            </Tab>
            <Tab fontFamily="Bebas Neue" letterSpacing="0.15rem">
              Day 3
            </Tab>
            <Tab fontFamily="Bebas Neue" letterSpacing="0.15rem">
              Day 4
            </Tab>
            <Tab fontFamily="Bebas Neue" letterSpacing="0.15rem">
              Day 5
            </Tab>
            <Tab fontFamily="Bebas Neue" letterSpacing="0.15rem">
              Day 6
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <WorkoutsForDay day={data.day1} />
            </TabPanel>
            <TabPanel>
              <WorkoutsForDay day={data.day2} />
            </TabPanel>
            <TabPanel>
              <WorkoutsForDay day={data.day3} />
            </TabPanel>
            <TabPanel>
              <WorkoutsForDay day={data.day4} />
            </TabPanel>
            <TabPanel>
              <WorkoutsForDay day={data.day5} />
            </TabPanel>
            <TabPanel>
              <WorkoutsForDay day={data.day6} />
            </TabPanel>
          </TabPanels>
        </Tabs>
  </Box>*/}
      <Flex mt="24px" p="24px" justify="center" align="center">
        <Heading size="md" letterSpacing="0.15rem">
          Don't want to wait? Try the Sample Workouts!
        </Heading>
      </Flex>
      <Flex mb="48px" justify="center" align="center">
        <Box
          p="16px"
          boxShadow="-1px 1px 0 0 black, -2px 2px 0 0 black, -3px 3px 0 0 black, -4px 4px 0 0 black, -5px 5px 0 0 black, -6px 6px 0 0 black"
          border="1px solid black"
        >
          <Link to="/sample-workouts">
            Sample Workouts <Icon ml="8px" name="arrow-forward" />
          </Link>
        </Box>
      </Flex>
      <Footer />
    </>
  );
};

export const query = graphql`
  query WorkoutsPage {
    bg: file(relativePath: { eq: "wood-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    day1: allGoogleDocs(
      sort: { fields: [document___name] }
      filter: { document: { path: { regex: "/workouts/day-1/" } } }
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
      filter: { document: { path: { regex: "/workouts/day-2/" } } }
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
      filter: { document: { path: { regex: "/workouts/day-3/" } } }
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
    day4: allGoogleDocs(
      sort: { fields: [document___name] }
      filter: { document: { path: { regex: "/workouts/day-4/" } } }
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
    day5: allGoogleDocs(
      sort: { fields: [document___name] }
      filter: { document: { path: { regex: "/workouts/day-5/" } } }
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
    day6: allGoogleDocs(
      sort: { fields: [document___name] }
      filter: { document: { path: { regex: "/workouts/day-6/" } } }
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
