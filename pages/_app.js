import "../styles/globals.css";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import customTheme from "../public/theme.js";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
