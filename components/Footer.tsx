import { Flex, Text } from "@chakra-ui/react";

import "@fontsource/viga";

const Nav: React.FC = () => {
  return (
    <Flex
      background={"white"}
      width="100%"
      flexBasis={"50px"}
      p="2"
      alignItems={"center"}
      justifyContent={"center"}
      gap="1"
    >
      <Text fontSize="xs" color="#731C62">
        Jenny Klein
      </Text>
      <Text fontSize="xs">@ {new Date().getFullYear()}</Text>
    </Flex>
  );
};

export default Nav;
