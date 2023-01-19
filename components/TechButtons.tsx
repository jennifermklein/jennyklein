import TechButton from "./TechButton";
import Image from "next/image";
import { Flex } from "@chakra-ui/react";

const SocialButtons: React.FC = () => {
  return (
    <Flex gap="6">
      <TechButton label={"React"} href={"https://reactjs.org/"}>
        <Image
          src="/images/stack/react.png"
          alt="react"
          height={50}
          width={50}
        />
      </TechButton>
      <TechButton label={"Next"} href={"https://nextjs.org/"}>
        <Image src="/images/stack/next.png" alt="next" height={50} width={50} />
      </TechButton>
      <TechButton label={"Node"} href={"https://nodejs.org/en/"}>
        <Image src="/images/stack/node.png" alt="node" height={50} width={50} />
      </TechButton>
    </Flex>
  );
};

export default SocialButtons;
