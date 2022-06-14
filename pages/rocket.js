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

function Rocket() {
  return (
    <Container>
      <VStack alignSelf="center" p={4} maxW="50%">
        <Heading mb={2} p={2}>
          Rocket
        </Heading>
        <Text>
          Rocket is a Web3 app shipped with a Ethereum smart contract. A user is
          able to send a message and a rocket emoji that will be saved on the
          blockchain. I written a smart contract that will allow people to
          connect their wallets and interact with it. Send a rocket and have a
          random chance of earning a small amount of ETH from the site!
        </Text>
        <Image objectFit="cover" src="images/rocket.png" />
        <HStack justifyContent="space-around">
          <VStack alignItems="flex-start" p={4}>
            <Heading size="sm">April 2022</Heading>

            <Link
              href="https://github.com/brandon-man/rocket-frontend"
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
            <Link href="https://rocket-eth.vercel.app/" isExternal>
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
            <Text>Next.js | Solidity | Hardhat | Chakra UI</Text>
          </VStack>
        </HStack>
      </VStack>
    </Container>
  );
}

export default Rocket;
