import { Flex, Heading, Text, Stack, Button } from "@chakra-ui/react";

function Contact() {
  return (
    <Stack
      as="main"
      justifyContent="center"
      alignItems="flex-start"
      m="0 auto auto auto"
      maxWidth="700px"
      h={["600", "800"]}
    >
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        maxWidth="700px"
      >
        <Heading fontSize={["3xl", "5xl"]} m={8}>
          Hello / こんにちは!
        </Heading>
        <Text fontSize={["md", "xl"]} m={10}>
          For any inquiries, whether it's for work opportunities or just to say
          hi, feel free to message me.
        </Text>
        <Button
          as="a"
          href="mailto:nybrandonman@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          colorScheme="teal"
          variant="outline"
          rounded={20}
        >
          Say Hello
        </Button>
      </Flex>
    </Stack>
  );
}

export default Contact;
