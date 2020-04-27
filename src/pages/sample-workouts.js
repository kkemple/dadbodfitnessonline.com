import React from "react";
import { graphql } from "gatsby";
import { Heading, Text, Flex, Box } from "@chakra-ui/core";

import Header from "../components/header";
import Footer from "../components/footer";
import NewsletterSignup from "../components/newsletter";
import WoodSection from "../components/wood-section";

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
            maxW="1280px"
            mx="auto"
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
          <Box pb="24px">
            <Heading textAlign="center" size="xl" as="h4" mb="24px">
              Day 1
            </Heading>
            <Flex
              maxW="1280px"
              justify="space-around"
              align="stretch"
              direction={["column", "column", "row"]}
            >
              <Box
                borderWidth="1px"
                borderColor="#000000"
                boxShadow="-1px 1px 0 0 black, -2px 2px 0 0 black, -3px 3px 0 0 black, -4px 4px 0 0 black, -5px 5px 0 0 black, -6px 6px 0 0 black"
                p="24px"
                flex="1"
                mb={["24px", "24px", "0"]}
              >
                <Heading as="h5" size="md" fontWeight="bold">
                  Dad Fit
                </Heading>
                <Text>
                  <b>5 Minute AMRAP:</b>
                  <br />
                  - 7 Double Dumbbell Hang Power Clean
                  <br />
                  - 7 Double Dumbbell Squats
                  <br />
                  - 7 Box Jumps (or step ups)
                  <br />
                  <br />
                  1:00 Minute Rest
                </Text>
                <br />
                <Text>
                  <b>5 Minute AMRAP:</b>
                  <br />
                  - 5 Double Dumbbell Hang Power Clean
                  <br />
                  - 5 Double Dumbbell Squats
                  <br />
                  - 5 Box Jumps
                  <br />
                  <br />
                  1:00 Minute Rest
                </Text>
                <br />
                <Text>
                  <b>5 Minute AMRAP:</b>
                  <br />
                  - 3 Double Dumbbell Hang Power Clean
                  <br />
                  - 3 Double Dumbbell Squats
                  <br />
                  - 3 Box Jumps
                  <br />
                  <br />
                  1:00 Minute Rest
                </Text>
                <br />
                <Text>
                  <i>
                    Complete as many rounds as possible (AMRAP) in each of the 5
                    minute windows given. Pick a weight where you can keep
                    unbroken sets with the dumbells or barbell.
                  </i>
                </Text>
              </Box>
              <Box flex=".1" />
              <Box
                borderWidth="1px"
                borderColor="#000000"
                boxShadow="-1px 1px 0 0 black, -2px 2px 0 0 black, -3px 3px 0 0 black, -4px 4px 0 0 black, -5px 5px 0 0 black, -6px 6px 0 0 black"
                p="24px"
                flex="1"
              >
                <Heading as="h5" size="md" fontWeight="bold">
                  Dad Pump
                </Heading>
                <Text>
                  Dumbbell Strict Press (<b>4x 8-12 Reps</b>)
                  <br />
                  Dumbbell Bent Over Row (<b>4x 8-12 Reps</b>)
                  <br />
                </Text>
                <br />
                <Text>
                  Push ups (<b>4x16-20 Reps</b>)
                  <br />
                  Strict Pull Ups (<b>4x6-10 Reps</b>)
                  <br />
                </Text>
                <br />
                <Text>
                  Dumbbell Lateral Raise (<b>4x10-12 Reps</b>)
                  <br />
                  Dumbbell Front Raise (<b>4x10-12 Reps</b>)
                </Text>
                <br />
                <Text>
                  <i>
                    Superset movements. Take the first two movements and do them
                    back and forth for 4 sets each. Then, move onto the second
                    two movements, then the third two movements.
                    <br />
                    <br />
                    Try to go to failure or close to it on the last set of each
                    exercise!
                  </i>
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
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
  }
`;
