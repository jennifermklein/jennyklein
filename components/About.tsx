import { Flex, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <Flex direction="column" gap="5">
      <Text>
        I am a full stack software engineer living in Brooklyn, New York. Prior
        to becoming a software engineer, I practiced law for 10 years, primarily
        at{" "}
        <Text
          as="a"
          color="#731C62"
          target="_blank"
          href="https://www.kramerlevin.com/en/"
        >
          Kramer Levin
        </Text>
        . My engineering career began at at{" "}
        <Text
          as="a"
          color="#731C62"
          target="_blank"
          href="https://www.upandup.co"
        >
          Up&Up
        </Text>
        , and I currently work at{" "}
        <Text
          as="a"
          color="#731C62"
          target="_blank"
          href="https://flatiron.com"
        >
          Flatiron Health
        </Text>
        .
      </Text>
    </Flex>
  );
}
