import { Text, Flex, Grid, Stack, Heading } from "@chakra-ui/react";
import Image from "next/image";

import Footer from "../components/Footer";
import Container from "../components/Container";

function About() {
  return (
    <Container>
      <Grid templateColumns="repeat(2, auto)" gap={['6','10']} h={['610','710']}>
        <Stack
          justifyContent="center"
          alignItems="flex-start"
          m="auto 0 auto auto"
          maxWidth="700px"
        >
          <Flex
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            maxWidth={400}
            justifyContent="center"
            flexDirection="row"
            color="gray.400"
            bg="base.d100"
            rounded={5}
            flex={1}
            p={5}
          >
            <Image
              src="/images/profile.jpg"
              height={500}
              width={400}
              alt="The Camino"
            />
          </Flex>
        </Stack>
        <Stack
          justifyContent="center"
          alignItems="flex-start"
          m="auto auto auto 0"
          maxWidth={760}
          spacing={6}
        >
          <Heading fontSize={["xl","4xl"]}>Hello!</Heading>
          <Text fontSize={["sm","lg"]}>
            Worked in finance, now a software engineer. I have always loved to
            build things and now I can test my creative and technical know-how
            through coding.
          </Text>
          <Text fontSize={["sm","lg"]}>
            I have always felt a sense of accomplishment after overcoming a big
            obstacle and this holds true for both my personal and work life.
            This picture of me was when I walked the challenging and grueling
            but ultimately rewarding pilgrimage called the Camino de Santiago in
            Spain.
          </Text>
          <Text fontSize={["sm","lg"]}>
            If you need a problem to be solved or just want to connect, you can
            always reach me through e-mail or LinkedIn.
          </Text>
        </Stack>
      </Grid>
      <Footer />
    </Container>
  );
}

export default About;
