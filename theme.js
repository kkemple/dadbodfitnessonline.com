import { theme } from "@chakra-ui/core";

export default {
  ...theme,
  colors: {
    ...theme.colors,
    black: {
      100: "#686868",
      200: "#585858",
      300: "#464646",
      400: "#323232",
      500: "#1c1c1c",
      600: "#161616",
      700: "#0f0f0f",
      800: "#060606",
      900: "#000000",
    },
  },
  breakpoints: ["30em", "48em", "62em", "80em"],
  fonts: {
    heading: '"Bebas Neue", sans-serif',
    body: "system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
  },
};
