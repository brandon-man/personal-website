import { useColorMode, Button, Flex, Box } from "@chakra-ui/react";
import NextLink from "next/link";
import styled from "@emotion/styled";
import React from "react";

import DarkModeSwitch from "../components/DarkModeSwitch";

const Container = ({ children }) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "gray.50",
    dark: "#171717",
  };

  const navHoverBg = {
    light: "gray.100",
    dark: "gray.300",
  };

  const color = {
    light: "black",
    dark: "white",
  };

  const StickNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height 0.5s, line-height 0.5s;
  `;

  const handleClickPortfolio = () => window.scrollTo({ top: 900 });
  const handleClickContact = () => window.scrollTo({ top: 1700 });

  return (
    <Box bg={bgColor[colorMode]}>
      <StickNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-end"
        maxWidth={["330px", '450px']}
        as="nav"
        px={[2, 6, 6]}
        py={2}
        mb={[0, 0, 8]}
        ms="auto"
      >
        <Box>
          <NextLink href="/" passHref>
            <Button
              as="a"
              rounded={20}
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{
                color: "teal",
                stroke: "teal",
                backgroundColor: navHoverBg[colorMode],
              }}
            >
              Home
            </Button>
          </NextLink>
          <Button
            as="a"
            onClick={handleClickPortfolio}
            rounded={20}
            variant="ghost"
            p={[1, 2, 4]}
            _hover={{
              color: "teal",
              stroke: "teal",
              backgroundColor: navHoverBg[colorMode],
            }}
          >
            Portfolio
          </Button>
          <Button
            as="a"
            onClick={handleClickContact}
            rounded={20}
            variant="ghost"
            p={[1, 2, 4]}
            _hover={{
              color: "teal",
              stroke: "teal",
              backgroundColor: navHoverBg[colorMode],
            }}
          >
            Contact
          </Button>
          <NextLink href="/about" passHref>
            <Button
              as="a"
              rounded={20}
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{
                color: "teal",
                stroke: "teal",
                backgroundColor: navHoverBg[colorMode],
              }}
            >
              About
            </Button>
          </NextLink>
        </Box>
        <DarkModeSwitch />
      </StickNav>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        px={[0, 4, 4]}
        mt={[4, 8, 8]}
      >
        {children}
      </Flex>
    </Box>
  );
};

export default Container;
