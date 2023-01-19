import "../styles/global.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import type { AppProps } from "next/app";

import "@fontsource/open-sans";
import "@fontsource/montserrat";
import "@fontsource/alata";
import "@fontsource/viga";

const theme = extendTheme({
  fonts: {
    heading: `'Alata', sans-serif`,
    body: `'Open Sans', sans-serif`,
    mono: `'Alata', monospace`,
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
