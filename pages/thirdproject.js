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
import { ExternalLinkIcon, LinkIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";
import Container from "../components/Container";

function ThirdProject() {
  return (
    <Container>
      <VStack alignSelf="center" p={4} maxW="50%">
        <Heading mb={2} p={2}>
          iPear
        </Heading>
        <Text>
          iPear is an e-commerce site specializing in tech products. The key
          features of this app include: persistent cart for customers, admin
          dashboard to create and update products, and user authentication.
        </Text>
        <Text>
          Frontend contributions: state management for cart, products, and
          authentication using Redux Toolkit. Admin dashboard functionalities to
          view analytics and CRUD functionalities for products.
        </Text>
        <Text>
          Backend contributions: order history for customers, authentication
          with protected routes, and collaborative shopping cart modeling.
        </Text>
        <Image objectFit="cover" src="images/mistyrose-ipear.png" />
        <HStack justifyContent="space-around">
          <VStack alignItems="flex-start" p={4}>
            <Heading size="sm">April 2022</Heading>

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
            <Link href="https://mistyrose-ipear.herokuapp.com" isExternal>
              <Button
                leftIcon={<LinkIcon />}
                variant="outline"
                colorScheme="teal"
                fontWeight="bold"
                size="sm"
              >
                Deployed Site <ExternalLinkIcon mx="6px" />
              </Button>
            </Link>
          </VStack>

          <Divider orientation="vertical" />
          <VStack alignItems="flex-start" p={4} maxW="50%">
            <Heading size="sm">TECH STACK:</Heading>
            <Text>
              React & Redux Toolkit | Express | PostgreSQL & Sequelize |
              Material UI
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </Container>
  );
}

export default ThirdProject;
