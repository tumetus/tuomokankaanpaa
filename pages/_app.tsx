import { jsx, ThemeProvider } from "@emotion/react";
import { AppProps } from "next/app";
import Link from "next/link";
import CookieConsent from "react-cookie-consent";
import ReactGA from "react-ga";
import { useRouter } from "next/router";
import Meta from "../components/meta";
import "../styles/global.css";

export const theme = {
  colors: {
    primary: "hotpink",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  ReactGA.initialize("G-RDLTQJWV20");
  const router = useRouter();
  ReactGA.pageview(router.asPath);

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
        their use. See{" "}
        <Link href="/privacy">
          <a>privacy policy</a>
        </Link>{" "}
        for more info.
      </CookieConsent>
    </ThemeProvider>
  );
}

export default MyApp;
