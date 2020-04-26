import React from "react";
import { Box, Text } from "@chakra-ui/core";

export default () => (
  <Box as="footer" p="24px" textAlign="center">
    <Text>{`© Copyright ${new Date().getFullYear()} - Dadbod Fitness Online`}</Text>
  </Box>
);
