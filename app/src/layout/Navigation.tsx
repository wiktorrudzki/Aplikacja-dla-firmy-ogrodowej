import React, { useRef } from "react";
import { Box, Flex } from "@chakra-ui/react";

import { useNavigationMode, useResponsiveValues } from "@src/hooks";
import { formatToRem } from "@src/helpers";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import LogoNav from "./LogoNav";
import ShowMobileNav from "./ShowMobileNav";
import { NavContactBar } from "@src/components/navigation";

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
    >
      <NavContactBar />
      <Flex
        justify="space-between"
        align="center"
        wrap="wrap"
        h="full"
        px={{ base: 4, lg: 12 }}
        height={formatToRem(navigationHeightRem)}
      >
        <LogoNav navMode={navMode} />
        <DesktopNav navMode={navMode} />
        <ShowMobileNav navMode={navMode} showNav={showNav} />
      </Flex>
      {isMobile && <MobileNav hidden={hidden} onClose={hideNav} />}
    </Box>
  );
};

export default Navigation;
