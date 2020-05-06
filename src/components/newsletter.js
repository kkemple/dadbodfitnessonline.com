import React, { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { Heading, Input, Button, Flex } from "@chakra-ui/core";

export default () => {
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
        Never Miss a Dad Joke, Sign up for the newsletter!
      </Heading>
      <Flex mt="16px" justify="space-between" align="center">
        <Input
          flex="1"
          outline="none"
          borderColor="#000000"
          placeholder="Email address"
          name="email"
          type="text"
          value={email}
          onChange={handleEmailChange}
          rounded="none"
        />
        <Button
          fontFamily="Bebas Neue"
          letterSpacing="0.15rem"
          variantColor="black"
          rounded="none"
          type="submit"
        >
          Subscribe
        </Button>
      </Flex>
    </form>
  );
};
