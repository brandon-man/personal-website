import {
  Text,
  Flex,
  Box,
  Heading,
  Button,
  VStack,
  Container,
  Image,
  Link,
} from "@chakra-ui/react";
import { ArrowForwardIcon, ExternalLinkIcon } from "@chakra-ui/icons";

import NextLink from "next/link";
import ChakraCarousel from "./ChakraCarousel";
import projects from "../data/projects";

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
          {projects.map((project) => (
            <Flex
              key={project.id}
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
                height="50%"
                width="100%"
                objectFit="cover"
                src={project.image}
              />
              <VStack mb={6}>
                <Heading
                  fontSize={{ base: "xl", md: "2xl" }}
                  textAlign="center"
                  w="full"
                  mb={2}
                  p={2}
                >
                  {project.title}
                </Heading>
                <Text w="full">{project.body}</Text>
              </VStack>

              <Flex justifyContent="space-between">
                <Link href={project.link} isExternal>
                  <Button
                    variant="outline"
                    colorScheme="teal"
                    fontWeight="bold"
                    size="sm"
                  >
                    More <ExternalLinkIcon mx="6px" />
                  </Button>
                </Link>
              </Flex>
            </Flex>
          ))}
        </ChakraCarousel>
      </Container>
    </Box>
  );
}

export default Projects;
