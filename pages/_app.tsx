import { jsx, ThemeProvider } from "@emotion/react";
import { AppProps } from "next/app";
import CookieConsent from "react-cookie-consent";
import Meta from "../components/meta";
import "../styles/global.css";

export const theme = {
  colors: {
    primary: "hotpink",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Meta />
      <Component {...pageProps} />
      <CookieConsent
        style={{ background: "#000" }}
        buttonStyle={{
          color: "#fff",
          fontSize: "13px",
          background: "#0070f3",
          fontWeight: "bold",
        }}
      >
        This site uses cookies. By continuing to use this website, you agree to
        their use.
      </CookieConsent>
    </ThemeProvider>
  );
}

export default MyApp;
