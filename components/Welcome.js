import {
  Heading,
  Flex,
  Stack,
  Code,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import Typewriter from "../components/Welcome.module.css";

function Welcome() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  return (
    <>
      <Stack
        as="main"
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        h={["500px", "750px"]}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          maxWidth="700px"
        >
          <Heading
            className={Typewriter.typeWrite}
            fontSize={["1.8em", "4.7em"]}
            m={["0", "8"]}
          >
            hello, i'm brandon
          </Heading>
          <Text color={colorSecondary[colorMode]} fontSize={["sm", "lg"]} m={8}>
            I create{" "}
            <Code fontSize={["sm", "lg"]} colorScheme="facebook">
              code
            </Code>{" "}
            for the web.
          </Text>
        </Flex>
      </Stack>
    </>
  );
}

export default Welcome;
