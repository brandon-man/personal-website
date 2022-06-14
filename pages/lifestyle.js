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

function Lifestyle() {
  return (
    <Container>
      <VStack alignSelf="center" p={4} maxW="50%">
        <Heading mb={2} p={2}>
          Lifestyle
        </Heading>
        <Text>
          Lifestyle is a suite of applications featuring a mobile app that
          tracks your workout and diet plans. The key features of this app
          include: persistent progress tracking for exercises, customized
          workout and diet plans, and calendar system for planning and tracking
          workouts.
        </Text>
        <Text>
          Frontend contributions: state management for calendar, workouts, and
          exercises using Redux Toolkit. UI updates for exercises based on CRUD
          functionalities.
        </Text>
        <Text>
          Backend contributions: personalized workout plan system, workout and
          exercise update capabilities, and database modeling.
        </Text>
        <Image objectFit="cover" src="images/lifestyle.jpg" />
        <HStack justifyContent="space-around">
          <VStack alignItems="flex-start" p={4}>
            <Heading size="sm">May 2022</Heading>

            <Link
              href="https://github.com/FSA-Capstone-Lifestyle/Lifestyle"
              isExternal
            >
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
              React Native & Redux Toolkit | Express | PostgreSQL & Sequelize |
              Expo | Native Base
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </Container>
  );
}

export default Lifestyle;
