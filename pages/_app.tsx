import { jsx, ThemeProvider } from "@emotion/react";
import { AppProps } from "next/app";
import "../styles/global.css";

const theme = {
  colors: {
    primary: "hotpink",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
