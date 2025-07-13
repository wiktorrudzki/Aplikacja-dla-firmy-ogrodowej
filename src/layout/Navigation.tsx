import { Box, Flex } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useNavigationMode, useResponsiveValues } from "@src/hooks";
import { formatToRem } from "@src/helpers";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import LogoNav from "./LogoNav";
import ShowMobileNav from "./ShowMobileNav";

const Navigation = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const { isMobile, navigationHeightRem } = useResponsiveValues();

  const { isScrolled, hidden, navMode, showNav, hideNav } =
    useNavigationMode(navRef);

  return (
    <Box
      as="nav"
      ref={navRef}
      position="fixed"
      top="0"
      left="0"
      width="100vw"
      bg={isScrolled ? "white" : "transparent"}
      zIndex="1000"
      transition="background-color 0.3s ease"
      height={formatToRem(navigationHeightRem)}
      px={{ base: 4, lg: 12 }}
    >
      <Flex justify="space-between" align="center" wrap="wrap" h="full">
        <LogoNav navMode={navMode} />
        <DesktopNav navMode={navMode} />
        <ShowMobileNav navMode={navMode} showNav={showNav} />
      </Flex>
      {isMobile && <MobileNav hidden={hidden} onClose={hideNav} />}
    </Box>
  );
};

export default Navigation;
