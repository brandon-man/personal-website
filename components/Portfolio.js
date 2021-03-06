import {
  Text,
  Flex,
  Box,
  Heading,
  Button,
  VStack,
  Container,
  Image,
  Divider,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
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
              <Image objectFit="cover" src={project.image} />
              <VStack mb={6}>
                <Heading
                  color="teal"
                  fontSize={{ base: "xl", md: "40" }}
                  textAlign="center"
                  w="full"
                  mb={2}
                  p={2}
                >
                  {project.title}
                </Heading>

                <Text textAlign="center" w="full" fontSize="lg">
                  {project.body}
                </Text>

                <Divider />

                <Heading textAlign="center" w="full" fontSize="md" p={2}>
                  About
                </Heading>
                <Text>{project.desc}</Text>
              </VStack>

              <Flex justifyContent="flex-end">
                <NextLink href={project.link} passHref>
                  <Button
                    variant="outline"
                    colorScheme="teal"
                    fontWeight="bold"
                    size="sm"
                  >
                    More <ArrowForwardIcon mx="6px" />
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
