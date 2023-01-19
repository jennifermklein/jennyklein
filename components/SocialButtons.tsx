import SocialButton from "./SocialButton";
import { FaGithub, FaLinkedin, FaRegAddressCard } from "react-icons/fa";
import { Flex } from "@chakra-ui/react";

const SocialButtons: React.FC = () => {
  return (
    <Flex gap="6">
      <SocialButton
        label={"LinkedIn"}
        href={"https://www.linkedin.com/in/jennymklein/"}
      >
        <FaLinkedin />
      </SocialButton>
      <SocialButton label={"Github"} href={"https://github.com/jennifermklein"}>
        <FaGithub />
      </SocialButton>
      <SocialButton label={"email"} href={"mailto: jennifermklein@gmail.com"}>
        <FaRegAddressCard />
      </SocialButton>
    </Flex>
  );
};

export default SocialButtons;
