import { Box, Divider, Stack, Link } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

import SocialMediaLinks from "./SocialMediaLinks";
import { useState, useEffect } from "react";

function Footer() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box>
      <Stack>
        <Divider m="0 auto 4rem auto" borderColor="gray.500" />
        <Stack direction="row" justifyContent="center" alignItems="center">
          <SocialMediaLinks />
        </Stack>
      </Stack>
      {scrollPosition > 500 && (
        <Link href="/#top">
          <Box
            position="fixed"
            bottom="20px"
            right={["18px", "84px"]}
            zIndex={1}
          >
            <ArrowUpIcon
              w={8}
              h={8}
              _hover={{ color: "teal", stroke: "teal" }}
            />
          </Box>
        </Link>
      )}
    </Box>
  );
}

export default Footer;
