import "typeface-bebas-neue";
import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

import theme from "./theme";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    {element}
  </ThemeProvider>
);
