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

const cards = [
  {
    image:
      "https://images.unsplash.com/photo-1639415013200-e604f5439fad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Project 1",
    body: "Body",
  },
  {
    image:
      "https://images.unsplash.com/photo-1637783497754-3a1a8107c8af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Project 2",
    body: "Body",
  },
  {
    image:
      "https://images.unsplash.com/photo-1637789714202-a6587b09d73e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Project 3",
    body: "Body",
  },
  {
    image:
      "https://images.unsplash.com/photo-1640033139299-348b248dba54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Project 4",
    body: "Body",
  },
  {
    image:
      "https://images.unsplash.com/photo-1640032549163-5c3fb8fa97fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80",
    title: "Project 5",
    body: "Body",
  },
  {
    image:
      "https://images.unsplash.com/photo-1640018776987-623cfd6d8ed9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Project 6",
    body: "Body",
  },
];

function Projects() {
  return (
    <Box>
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
          {cards.map((item, index) => (
            <Flex
              key={index}
              boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
              justifyContent="space-between"
              flexDirection="column"
              overflow="hidden"
              bg="base.d100"
              rounded={5}
              flex={1}
              p={5}
            >
              <Image height="100%" objectFit="cover" src={item.image} />
              <VStack mb={6}>
                <Heading
                  fontSize={{ base: "xl", md: "2xl" }}
                  textAlign="center"
                  w="full"
                  mb={2}
                  p={2}
                >
                  {item.title}
                </Heading>
                <Text w="full">{item.body}</Text>
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
          ))}
        </ChakraCarousel>
      </Container>
    </Box>
  );
}

export default Projects;
