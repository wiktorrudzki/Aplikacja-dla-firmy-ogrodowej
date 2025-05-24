import { Box, Flex } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useNavigationMode } from "@src/hooks";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import LogoNav from "./LogoNav";
import ShowMobileNav from "./ShowMobileNav";

const Navigation = () => {
  const navRef = useRef<HTMLDivElement>(null);

  const { isScrolled, hidden, navMode, showNav, hideNav } =
    useNavigationMode(navRef);

  return (
    <Box
      as="nav"
      ref={navRef}
      position="fixed"
      top="0"
      left="0"
      width="100%"
      bg={isScrolled ? "white" : "transparent"}
      zIndex="1000"
      transition="background-color 0.3s ease"
      py={{ base: 24, md: 24 }}
      px={{ base: 16, lg: 50 }}
    >
      <Flex justify="space-between" align="center" wrap="wrap">
        <LogoNav navMode={navMode} />
        <DesktopNav navMode={navMode} />
        <ShowMobileNav navMode={navMode} showNav={showNav} />
      </Flex>
      <MobileNav hidden={hidden} navMode={navMode} onClose={hideNav} />
    </Box>
  );
};

export default Navigation;
