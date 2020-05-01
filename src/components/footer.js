import React from "react";
import { Box, Text, Flex } from "@chakra-ui/core";

import WoodSection from "./wood-section";
import NewsletterSignup from "./newsletter";

export default ({ hideNewsletter }) => (
  <>
    {hideNewsletter ? null : (
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
    )}
    <Box as="footer" p="24px" textAlign="center">
      <Text>{`© Copyright ${new Date().getFullYear()} - Dadbod Fitness Online`}</Text>
    </Box>
  </>
);
