import { jsx, ThemeProvider } from "@emotion/react";
import { AppProps } from "next/app";
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
    </ThemeProvider>
  );
}

export default MyApp;
