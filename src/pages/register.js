import React, { useState } from "react";
import {
  Stack,
  Input,
  Flex,
  Box,
  Heading,
  Button,
  Badge,
  Text,
} from "@chakra-ui/core";

import Header from "../components/header";
import Footer from "../components/footer";
import WoodSection from "../components/wood-section";
import { useAuth0 } from "../../utils/auth";

const isBrowser = typeof window !== "undefined";

export default () => {
  if (!isBrowser) return null;
  const { loginWithRedirect } = useAuth0();
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const { target } = event;

    try {
      setLoading(true);

      if (target.password.value !== target.confirmPassword.value) {
        throw new Error("Passwords do not match!");
      }

      const response = await fetch("/.netlify/functions/auth", {
        headers: {
          Authorization: `Basic ${btoa(
            `${target.email.value}:${target.password.value}`
          )}`,
          AccessCode: target.code.value,
        },
      });

      if (response.ok) {
        target.reset();
        setError(null);
        setRegistered(true);
        setLoading(false);
      } else {
        const error = await response.text();
        throw new Error(error);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  return (
    <Flex h="100vh" direction="column">
      <Header />
      <Box flex="1">
        <WoodSection h="full">
          <Flex as="section" h="full" justify="center" align="center" p="24px">
            <Box
              w={["full", "360px"]}
              p="24px"
              background="white"
              borderWidth="1px"
              borderColor="#000000"
              boxShadow="-1px 1px 0 0 black, -2px 2px 0 0 black, -3px 3px 0 0 black, -4px 4px 0 0 black, -5px 5px 0 0 black, -6px 6px 0 0 black"
            >
              {registered ? (
                <Heading letterSpacing="0.15rem" size="md">
                  Congratulations! You're now registered! You can now Log In!
                </Heading>
              ) : (
                <Heading letterSpacing="0.15rem" size="md">
                  Enter Your Code{" "}
                  <Badge fontSize="12px" variantColor="orange">
                    From BTWB
                  </Badge>
                </Heading>
              )}
              <Stack
                mt="16px"
                w="full"
                as="form"
                spacing="4"
                onSubmit={handleSubmit}
              >
                {error && <Text color="red.500">{error.message}</Text>}
                <Input
                  isRequired
                  borderColor="black"
                  borderRadius="0"
                  placeholder="Email"
                  type="email"
                  name="email"
                />
                <Input
                  isRequired
                  borderColor="black"
                  borderRadius="0"
                  placeholder="Password"
                  type="password"
                  name="password"
                />
                <Input
                  isRequired
                  borderColor="black"
                  borderRadius="0"
                  placeholder="Confirm Password"
                  type="password"
                  name="confirmPassword"
                />
                <Input
                  isRequired
                  borderColor="black"
                  borderRadius="0"
                  placeholder="Access Code"
                  type="text"
                  name="code"
                />
                <Flex align="center" justify="space-between">
                  <Button
                    mt="2"
                    mr="auto"
                    isLoading={loading}
                    type="submit"
                    variantColor="black"
                    rounded="none"
                  >
                    Register
                  </Button>
                  <Button
                    variant="link"
                    variantColor="black"
                    onClick={loginWithRedirect}
                  >
                    Log In
                  </Button>
                </Flex>
              </Stack>
            </Box>
          </Flex>
        </WoodSection>
      </Box>
      <Footer hideNewsletter />
    </Flex>
  );
};
