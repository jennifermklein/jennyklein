import Link from "next/link";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

import "@fontsource/viga";

import SocialButtons from "./SocialButtons";

const NavLink = ({ path, currPath }: { path: string; currPath: string }) => {
  const active = currPath === `/${path}`;
  return (
    <Text color={active ? "#731C62" : "black"}>
      <Link href={`/${path}`}>{path}</Link>
    </Text>
  );
};

const Nav: React.FC = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <Flex
      px="5"
      py="3"
      alignItems="center"
      justifyContent="space-between"
      direction={{ base: "column", sm: "row" }}
    >
      <Flex
        gap={{ base: "2", sm: "6" }}
        alignItems={"center"}
        direction={{ base: "column", sm: "row" }}
      >
        <Link href="/">
          <Text fontFamily="Viga" fontSize={"4xl"}>
            JK
          </Text>
        </Link>
        <NavLink path={"projects"} currPath={router.pathname} />
        <NavLink path={"resume"} currPath={router.pathname} />
      </Flex>
      <Box visibility={{ base: "hidden", sm: "visible" }}>
        <SocialButtons />
      </Box>
    </Flex>
  );
};

export default Nav;
