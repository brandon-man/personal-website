import {
  Heading,
  Text,
  VStack,
  Image,
  HStack,
  Divider,
  Button,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";
import Container from "../components/Container";

function SecondProject() {
  return (
    <Container>
      <VStack alignSelf="center" p={4} maxW="50%">
        <Heading mb={2} p={2}>
          mycha
        </Heading>
        <Text>
          Developed as a project to dive deeper into full stack development, the
          site features: user sign up and login, product filtering, and cart
          functionality. The site is also designed to be responsive and mobile
          friendly.
        </Text>

        <Image objectFit="cover" src="images/mycha.png" />
        <HStack justifyContent="space-around">
          <VStack alignItems="flex-start" p={4}>
            <Heading size="sm">January 2022</Heading>

            <Link href="https://github.com/brandon-man/mycha" isExternal>
              <Button
                leftIcon={<FaGithub />}
                variant="outline"
                colorScheme="teal"
                fontWeight="bold"
                size="sm"
              >
                Source Code <ExternalLinkIcon mx="6px" />
              </Button>
            </Link>
          </VStack>

          <Divider orientation="vertical" />
          <VStack alignItems="flex-start" p={4} maxW="50%">
            <Heading size="sm">TECH STACK:</Heading>
            <Text>
              Next.js & Redux Toolkit | Express | MongoDB & Mongoose | Chakra UI
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </Container>
  );
}

export default SecondProject;
