import Layout from "../components/Layout";
import Image from "next/image";
import { Flex } from "@chakra-ui/react";

export default function Resume() {
  return (
    <Layout>
      <Flex justifyContent={"center"}>
        <Image src="/images/resume.png" width={750} height={750} alt="resume" />
      </Flex>
    </Layout>
  );
}
