import Image from "next/image";
import { Box, Heading, Flex, Text } from "@chakra-ui/react";
export default function Jay() {
  return (
    <Box p="4">
      <Flex
        justifyContent="center"
        p="8"
        bgImage={"images/jay/unicorn.webp"}
        backgroundSize="100px"
      >
        <Flex
          p="6"
          backgroundImage={"images/jay/hearts.jpg"}
          backgroundSize="100px"
          direction="column"
        >
          <Heading background="pink" color="purple" fontSize={"36pt"}>
            The Queen and the Returning Fairy
          </Heading>

          <Text px="8" background="pink" fontSize={"24pt"}>
            By: Jay Charlotte Birnbaum
          </Text>
          <Box ml="250">
            <Image
              src="/images/jay/jay.png"
              alt="jay"
              height={200}
              width={300}
            ></Image>
          </Box>
          <Flex justifyContent={"center"}>
            <Image
              src="/images/jay/fairy.webp"
              alt="tinkerbell"
              height={200}
              width={300}
            ></Image>
            <Image
              src="/images/jay/rainbow.png"
              alt="rainbow"
              height={200}
              width={300}
            ></Image>
            <Image
              src="/images/jay/princess.jpg"
              alt="princess"
              height={200}
              width={200}
            ></Image>
            <Image
              src="/images/jay/queen.jpg"
              alt="queen"
              height={200}
              width={200}
            ></Image>
            <Image
              src="/images/jay/humanqueen.jpg"
              alt="human queen"
              height={200}
              width={200}
            ></Image>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        p="8"
        bgImage={"images/jay/unicorn2.jpg"}
        backgroundSize="100px"
        direction="column"
      >
        <Flex
          p="8"
          bgImage={"images/jay/star.jpg"}
          backgroundSize="60px"
          direction="column"
          justifyContent={"center"}
        >
          <Flex>
            <Image
              src="/images/jay/Jay.jpg"
              alt="Jay"
              height={200}
              width={300}
            ></Image>
            <Image
              src="/images/jay/bodhi.jpg"
              alt="bodhi"
              height={200}
              width={300}
            ></Image>
            <Image
              src="/images/jay/uly.jpg"
              alt="uly"
              height={200}
              width={300}
            ></Image>
          </Flex>
          <Flex p="4" background="white" direction="column" gap="4">
            <Text color="red">
              Once upon a time, there was a fairy named Clarion. She was the
              queen of all fairy land.
            </Text>
            <Text color="orange">
              She had a daughter. Her daughter didn't like being a fairy at all.
              But one day, there was a big grumpy monster. And they blamed her
              just for not liking being a fairy, because they thought everyone
              likes fairies.
            </Text>
            <Text color="pink">
              So the fairy escaped. But then, a princess daughter found her. And
              the princess daughter called her tinkerbell. But tinkerbell didn't
              like her being her mom.
            </Text>
            <Text color="green">
              One day, when Tinkerbell was a grownup, she went out to a
              restaurant with her friend. And one of the people said, why are
              you a fairy? Only humans are in this party.
            </Text>
            <Text color="blue">
              Then, tinkerbell noticed that being a fairy actually wasn't so
              bad. But she couldn't find her way home. On her way home, she met
              a friendly monster. And the friendly monster tried to help her.
              But then after a year or two, tinkerbell found her mother. Her
              mother told her never to escape again, and they lived happily ever
              after.
            </Text>
            <Text color="purple">The End.</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
