import React, { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

  const { isScrolled, hidden, navMode, showNavContactBar, showNav, hideNav } =
    useNavigationMode(navRef);

  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      left="0"
      width="100vw"
      bg={isScrolled ? "white" : "transparent"}
      zIndex="1000"
      transition="background-color 0.3s ease"
    >
      <AnimatePresence>
        {showNavContactBar && <NavContactBar key="nav-contact-bar" />}
        <Flex
          ref={navRef}
          justify="space-between"
          align="center"
          wrap="wrap"
          height={formatToRem(navigationHeightRem)}
          px={{ base: 4, lg: 12 }}
          asChild
        >
          <motion.div key="nav-menu" layout>
            <LogoNav navMode={navMode} />
            <DesktopNav navMode={navMode} />
            <ShowMobileNav navMode={navMode} showNav={showNav} />
          </motion.div>
        </Flex>
      </AnimatePresence>

      {isMobile && <MobileNav hidden={hidden} onClose={hideNav} />}
    </Box>
  );
};

export default Navigation;
