import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { Heading, Input, Button, Flex, Box } from "@chakra-ui/core";

import Header from "../components/header";
import Section from "../components/wood-section";

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
      <Heading>Stay informed, sign up for the newsletter!</Heading>
      <Flex
        justify="space-between"
        align="center"
        p="24px"
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
        <Button variantColor="teal">Subscribe</Button>
      </Flex>
    </form>
  );
};

export default ({ data }) => {
  return (
    <>
      <Header />
      <main>
        <Section>
          <Flex align="center" justify="center" py="64px">
            <Box
              width="480px"
              backgroundColor="white"
              p="24px"
              borderRadius="10px"
              boxShadow="2px 2px rgba(0,0,0,0.3)"
            >
              <NewsletterSignup />
            </Box>
          </Flex>
        </Section>
      </main>
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
  }
`;
