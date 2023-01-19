import Head from "next/head";
import { Box } from "@chakra-ui/react";

import Nav from "./Nav";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <Box>
      <Head>
        <link rel="icon" href="/favicon-32x32.png" />
        <meta name="description" content="My portfolio" />
      </Head>
      <Nav />
      <main>{children}</main>
      <Footer />
    </Box>
  );
};

export default Layout;
