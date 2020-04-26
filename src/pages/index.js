import React, { useState } from "react";
import { graphql } from "gatsby";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { Grid, Heading, Text, Input, Button, Flex, Box } from "@chakra-ui/core";
import Image from "gatsby-image";
import styled from "@emotion/styled";

import Header from "../components/header";
import Footer from "../components/footer";
import WoodSection from "../components/wood-section";

export const CoachDescription = styled.span`
  display: block;
  margin-top: 8px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  max-width: 300px;
  font-size: 14px;
`;

export const CoachImg = styled(Image)`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto;
  object-fit: cover;
`;

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
      <Heading letterSpacing="0.1rem">
        Stay informed, sign up for the newsletter!
      </Heading>
      <Flex
        justify="space-between"
        align="center"
        p="8px"
        backgroundColor="gray.100"
        borderRadius="5px"
      >
        <Input
          mr="16px"
          flex="1"
          outline="none"
          border="none"
          placeholder="Email address"
          name="email"
          type="text"
          value={email}
          onChange={handleEmailChange}
        />
        <Button
          fontFamily="Bebas Neue"
          letterSpacing="0.15rem"
          variantColor="black"
        >
          Subscribe
        </Button>
      </Flex>
    </form>
  );
};

export default ({ data }) => {
  return (
    <>
      <Header />
      <main>
        <WoodSection>
          <Flex
            align="center"
            justify="center"
            h="400px"
            p={["24px", "36px", "48px"]}
          >
            <Heading
              as="h2"
              fontSize="64px"
              letterSpacing="0.15rem"
              color="white"
            >
              Ditch the Dadbod, Launching May 1st
            </Heading>
          </Flex>
        </WoodSection>
        <Box as="section" py="48px" px="24px">
          <Heading mb="48px" letterSpacing="0.15rem" as="h3" textAlign="center">
            Meet Your Coaches
          </Heading>
          <Flex
            flexDir={["column", "column", "row", "row"]}
            justify={[
              "flex-start",
              "flex-start",
              "space-around",
              "space-around",
            ]}
            px="24px"
          >
            <Box flex="1" mb="24px">
              <CoachImg
                alt="Ben Smith"
                fluid={data.ben.childImageSharp.fluid}
              />
              <Heading
                as="h4"
                letterSpacing="0.15rem"
                textAlign="center"
                my="8px"
                size="lg"
              >
                Ben Smith
              </Heading>
              <Text textAlign="center" fontSize="12px">
                Ben won the 2015 CrossFit Games and became the sixth man to earn
                the title of "Fittest Man on Earth", has finished 1st place in
                the Mid-Atlantic Region 5 times and has a record 11 appearances
                at the CrossFit Games.
              </Text>
            </Box>
            <Box flex="1" mb="24px" mx={["0px", "0px", "64px", "80px"]}>
              <CoachImg
                alt="Dane Smith"
                fluid={data.dane.childImageSharp.fluid}
              />
              <Heading
                as="h4"
                letterSpacing="0.15rem"
                textAlign="center"
                my="8px"
                size="lg"
              >
                Dane Smith
              </Heading>
              <Text textAlign="center" fontSize="12px">
                Dane is a Three-Time Atlantic Regional Athlete and one of the
                most fun Crossfitter in the World to watch compete. Dane’s all
                out mentality makes him a ferocious competitor on the field.
              </Text>
            </Box>
            <Box flex="1" mb="24px">
              <CoachImg
                alt="Adam Klink"
                fluid={data.adam.childImageSharp.fluid}
              />
              <Heading
                as="h4"
                letterSpacing="0.15rem"
                textAlign="center"
                my="8px"
                size="lg"
              >
                Adam Klink
              </Heading>
              <Text textAlign="center" fontSize="12px">
                Adam enjoys the challenges of CrossFit, both physical and
                mental. He loves the fact that Crossfit provides an opportunity
                for each individual to improve the quality of their life.
              </Text>
            </Box>
          </Flex>
        </Box>
        <WoodSection>
          <Flex h="400px" align="center" justify="center" py="64px" px="8px">
            <Box
              width="480px"
              backgroundColor="white"
              p="16px"
              borderRadius="10px"
              boxShadow="2px 2px rgba(0,0,0,0.3)"
            >
              <NewsletterSignup />
            </Box>
          </Flex>
        </WoodSection>
        <Box as="section" py="48px" px="24px">
          <Heading mb="48px" letterSpacing="0.15rem" as="h3" textAlign="center">
            Our Formula
          </Heading>
          <Flex px="24px" justify="space-around" align="center">
            <Text w="300px" fontWeight="bold" mt="-25px">
              More people now than ever are resorting to building their own
              home/garage gym. If you are one of those people make sure you have
              the best quality programming that’s available to you.
            </Text>
            <Text w="300px" fontSize="18px" fontStyle="italic">
              The @dadbodfitnessonline coaching staff has the experience and
              accolades that are almost impossible to find anywhere else.
              @bsmit13 @adamklink and @danedoes have come together to create a
              program that is a unique mixture of CrossFit, strength work, and
              body building work.
            </Text>
            <Text
              w="300px"
              fontWeight="bold"
              fontSize="20px"
              textTransform="uppercase"
              mt="-20px"
            >
              A little bit of everything to keep the workouts varied, fun, and
              efficient.
            </Text>
          </Flex>
        </Box>
        <WoodSection>
          <Heading
            mb="48px"
            letterSpacing="0.15rem"
            as="h3"
            textAlign="center"
            color="white"
            pt="48px"
          >
            Follow Us on Instagram
          </Heading>
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gap={10}
            px="64px"
            pb="48px"
          >
            {data.insta.edges.map(({ node }) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://instagram.com/p/${node.id}`}
              >
                <Box key={node.id} rounded="lg" overflow="hidden">
                  <Image fluid={node.localFile.childImageSharp.fluid} />
                  {/* <Box p="8px" background="white">
                  <Text>{node.caption}</Text>
                </Box> */}
                </Box>
              </a>
            ))}
          </Grid>
        </WoodSection>
        <Box as="section" py="48px" px="24px">
          <Heading mb="48px" letterSpacing="0.15rem" as="h3" textAlign="center">
            Dadbod Fitness Online is part of the Ben Smith Blueprint
          </Heading>
          <Flex justify="center" align="center">
            <a
              href="https://www.bensmithblueprint.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <CoachImg
                style={{
                  display: "inline-block",
                }}
                alt="The Ben Smith Blueprint"
                fluid={data.bp.childImageSharp.fluid}
              />
            </a>
          </Flex>
        </Box>
      </main>
      <Footer />
    </>
  );
};

export const query = graphql`
  query IndexPage {
    bg: file(relativePath: { eq: "wood-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ben: file(relativePath: { eq: "ben.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dane: file(relativePath: { eq: "dane.png" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    adam: file(relativePath: { eq: "adam.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bp: file(relativePath: { eq: "blueprint-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    insta: allInstaNode(limit: 3) {
      edges {
        node {
          id
          caption
          localFile {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
