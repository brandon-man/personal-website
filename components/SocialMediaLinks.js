import { ButtonGroup, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { EmailIcon } from "@chakra-ui/icons";

const SocialMediaLinks = () => {
  return (
    <ButtonGroup variant="ghost" color="gray.600" m={1.5} spacing={8}>
      <IconButton
        as="a"
        href="https://www.linkedin.com/in/brandon-man-868928187/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        icon={<FaLinkedin fontSize="25px" />}
        _hover={{ color: "teal", stroke: "teal" }}
      />
      <IconButton
        as="a"
        href="https://github.com/brandon-man"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        icon={<FaGithub fontSize="25px" />}
        _hover={{ color: "teal", stroke: "teal" }}
      />
      <IconButton
        as="a"
        href="mailto:nybrandonman@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
        icon={<EmailIcon fontSize="25px" />}
        _hover={{ color: "teal", stroke: "teal" }}
      />
    </ButtonGroup>
  );
};

export default SocialMediaLinks;
