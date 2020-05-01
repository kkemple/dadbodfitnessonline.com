import React from "react";
import { navigate } from "gatsby";
import { SimpleGrid, Flex, Heading, Text, Code } from "@chakra-ui/core";
import styled from "@emotion/styled";

import Header from "../components/header";
import Footer from "../components/footer";
import { useAuth0 } from "../../utils/auth";
import WoodSection from "../components/wood-section";

const isBrowser = typeof window !== "undefined";

const Link = styled.a`
  font-weight: bold;
`;

export default () => {
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
        <Flex
          direction="column"
          justify="space-between"
          minH={["300px", null, "400px"]}
          p={["16px", "24px", "48px"]}
          borderWidth="1px"
          borderColor="#000000"
          boxShadow="-1px 1px 0 0 black, -2px 2px 0 0 black, -3px 3px 0 0 black, -4px 4px 0 0 black, -5px 5px 0 0 black, -6px 6px 0 0 black"
          mb={["24px", "24px", "0"]}
        >
          <Heading>Groove Life</Heading>
          <Text fontSize="18px" fontStyle="italic">
            Shop through hundreds of designs and even custom rings for you and
            your significant other! All Groove rings come with a "NO BS" return
            policy.
          </Text>
          <Text>
            Use code{" "}
            <Code fontSize="18px">
              <b>dadbod15</b>
            </Code>{" "}
            for 15% OFF your order
          </Text>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.groovelive.com"
          >
            www.groovelive.com
          </Link>
        </Flex>
        <Flex
          direction="column"
          justify="space-between"
          minH={["300px", null, "400px"]}
          p={["16px", "24px", "48px"]}
          borderWidth="1px"
          borderColor="#000000"
          boxShadow="-1px 1px 0 0 black, -2px 2px 0 0 black, -3px 3px 0 0 black, -4px 4px 0 0 black, -5px 5px 0 0 black, -6px 6px 0 0 black"
          mb={["24px", "24px", "0"]}
        >
          <Heading>DadBod Apparel</Heading>
          <Text fontSize="18px" fontStyle="italic">
            Simple, fashionable apparel that appeals every type of Dad! Shop
            their wide variety of shirts, hats, bags, and onesies, all designed
            by parents, for parents in the USA.
          </Text>
          <Text>
            Use code{" "}
            <Code fontSize="18px">
              <b>Dadbodfitness10</b>
            </Code>{" "}
            for 10% OFF your order
          </Text>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.dadbodapparel.com"
          >
            www.dadbodapparel.com
          </Link>
        </Flex>
        <Flex
          direction="column"
          justify="space-between"
          minH={["300px", null, "400px"]}
          p={["16px", "24px", "48px"]}
          borderWidth="1px"
          borderColor="#000000"
          boxShadow="-1px 1px 0 0 black, -2px 2px 0 0 black, -3px 3px 0 0 black, -4px 4px 0 0 black, -5px 5px 0 0 black, -6px 6px 0 0 black"
          mb={["24px", "24px", "0"]}
        >
          <Heading>Consistency Breeds Growth</Heading>
          <Text fontSize="18px" fontStyle="italic">
            Reach your max potential both physically and mentally individualized
            Nutrition Coaching and Programming. Free Diet Consultations
            available.
          </Text>
          <Text>
            Use code{" "}
            <Code fontSize="18px">
              <b>CBG</b>
            </Code>{" "}
            for 20% OFF your order
          </Text>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.consistencybreedsgrowth.com"
          >
            www.consistencybreedsgrowth.com
          </Link>
        </Flex>
      </SimpleGrid>
      <Footer />
    </>
  );
};
