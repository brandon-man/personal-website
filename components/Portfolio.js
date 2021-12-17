import {
  Text,
  Flex,
  Box,
  Heading,
  Button,
  VStack,
  HStack,
  Container,
  Image,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import NextLink from "next/link";
import ChakraCarousel from "./ChakraCarousel";

function Projects() {
  return (
    <Box maxHeight="150vh">
      <Container
        py={8}
        px={0}
        maxW={{
          base: "100%",
          sm: "35rem",
          md: "43.75rem",
          lg: "65.5rem",
        }}
      >
        <ChakraCarousel gap={32}>
          <Flex
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            justifyContent="space-between"
            flexDirection="column"
            overflow="hidden"
            bg="base.d100"
            rounded={5}
            flex={1}
            p={5}
          >
            <Image
              height="100%"
              objectFit="cover"
              src="https://images.unsplash.com/photo-1639415013200-e604f5439fad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
            <VStack mb={6}>
              <Heading
                fontSize={{ base: "xl", md: "2xl" }}
                textAlign="center"
                w="full"
                mb={2}
                p={2}
              >
                Project 1
              </Heading>
              <Text w="full">Body</Text>
            </VStack>

            <Flex justifyContent="space-between">
              <HStack spacing={2}></HStack>
              <NextLink href="/#top" passHref>
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  variant="outline"
                  colorScheme="teal"
                  fontWeight="bold"
                  size="sm"
                >
                  More
                </Button>
              </NextLink>
            </Flex>
          </Flex>
          <Flex
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            justifyContent="space-between"
            flexDirection="column"
            overflow="hidden"
            bg="base.d100"
            rounded={5}
            flex={1}
            p={5}
          >
            <Image
              height="100%"
              objectFit="cover"
              src="https://images.unsplash.com/photo-1637783497754-3a1a8107c8af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
            <VStack mb={6}>
              <Heading
                fontSize={{ base: "xl", md: "2xl" }}
                textAlign="center"
                w="full"
                mb={2}
                p={2}
              >
                Project 2
              </Heading>
              <Text w="full">Body</Text>
            </VStack>

            <Flex justifyContent="space-between">
              <HStack spacing={2}></HStack>
              <NextLink href="/#top" passHref>
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  variant="outline"
                  colorScheme="teal"
                  fontWeight="bold"
                  size="sm"
                >
                  More
                </Button>
              </NextLink>
            </Flex>
          </Flex>
          <Flex
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            justifyContent="space-between"
            flexDirection="column"
            overflow="hidden"
            bg="base.d100"
            rounded={5}
            flex={1}
            p={5}
          >
            <Image
              height="100%"
              objectFit="cover"
              src="https://images.unsplash.com/photo-1637789714202-a6587b09d73e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
            <VStack mb={6}>
              <Heading
                fontSize={{ base: "xl", md: "2xl" }}
                textAlign="center"
                w="full"
                mb={2}
                p={2}
              >
                Project 3
              </Heading>
              <Text w="full">Body</Text>
            </VStack>

            <Flex justifyContent="space-between">
              <HStack spacing={2}></HStack>
              <NextLink href="/#top" passHref>
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  variant="outline"
                  colorScheme="teal"
                  fontWeight="bold"
                  size="sm"
                >
                  More
                </Button>
              </NextLink>
            </Flex>
          </Flex>
          <Flex
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            justifyContent="space-between"
            flexDirection="column"
            overflow="hidden"
            bg="base.d100"
            rounded={5}
            flex={1}
            p={5}
          >
            <Image
              height="100%"
              objectFit="cover"
              src="https://images.unsplash.com/photo-1639353434411-088270055340?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
            <VStack mb={6}>
              <Heading
                fontSize={{ base: "xl", md: "2xl" }}
                textAlign="center"
                w="full"
                mb={2}
                p={2}
              >
                Project 4
              </Heading>
              <Text w="full">Body</Text>
            </VStack>

            <Flex justifyContent="space-between">
              <HStack spacing={2}></HStack>
              <NextLink href="/#top" passHref>
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  variant="outline"
                  colorScheme="teal"
                  fontWeight="bold"
                  size="sm"
                >
                  More
                </Button>
              </NextLink>
            </Flex>
          </Flex>
          <Flex
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            justifyContent="space-between"
            flexDirection="column"
            overflow="hidden"
            bg="base.d100"
            rounded={5}
            flex={1}
            p={5}
          >
            <Image
              height="100%"
              objectFit="cover"
              src="https://images.unsplash.com/photo-1639425620091-312639de647d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            <VStack mb={6}>
              <Heading
                fontSize={{ base: "xl", md: "2xl" }}
                textAlign="center"
                w="full"
                mb={2}
                p={2}
              >
                Project 5
              </Heading>
              <Text w="full">Body</Text>
            </VStack>

            <Flex justifyContent="space-between">
              <HStack spacing={2}></HStack>
              <NextLink href="/#top" passHref>
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  variant="outline"
                  colorScheme="teal"
                  fontWeight="bold"
                  size="sm"
                >
                  More
                </Button>
              </NextLink>
            </Flex>
          </Flex>
        </ChakraCarousel>
      </Container>
    </Box>
  );
}

export default Projects;
