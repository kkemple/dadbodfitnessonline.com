import "typeface-bebas-neue";
import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

import { Auth0Provider } from "./utils/auth";
import history from "./utils/history";
import theme from "./theme";

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

export const wrapRootElement = ({ element }) => (
  <Auth0Provider
    domain="dadbodfitnessonline.auth0.com"
    client_id="q2oQL3f0vXKJ5bwF8Hv7DP5gY92AuWpK"
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <ThemeProvider theme={theme}>
      <CSSReset />
      {element}
    </ThemeProvider>
  </Auth0Provider>
);
