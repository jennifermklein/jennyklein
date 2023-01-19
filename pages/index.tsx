import Head from "next/head";
import Image from "next/image";

import React from "react";

import Layout from "../components/Layout";
import About from "../components/About";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import SocialButtons from "../components/SocialButtons";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Jenny Klein</title>
      </Head>
      <Box p={[4, 8, 8, 16]} maxW={["95%", "80%"]}>
        <Flex direction="column" gap="5">
          <Flex align="flex-start" gap="4">
            <Image
              src={"/images/avatar.jpg"}
              width={90}
              height={90}
              alt="Jenny Klein"
              style={{
                borderRadius: "20%",
              }}
            />
            <Box>
              <Heading size={{ base: "md", sm: "xl" }} color="#731C62">
                Jenny Klein
              </Heading>
              <Text fontSize={{ base: "lg", sm: "2xl" }} whiteSpace={"nowrap"}>
                Software engineer
              </Text>
            </Box>
          </Flex>
          <About />
          <Flex gap="4" align="center">
            <Text>Get in touch: </Text>
            <SocialButtons />
          </Flex>
        </Flex>
      </Box>
    </Layout>
  );
};

export default Home;
