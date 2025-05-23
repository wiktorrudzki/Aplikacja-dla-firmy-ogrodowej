import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";

const Navigation = () => {
  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      left="0"
      width="100vw"
      bg="white"
      zIndex="1000"
      paddingY={32}
      paddingX={32}
    >
      <Flex width="100%" justifyContent="space-between" alignItems="center">
        <Flex gap={6}>
          <Link href="#about">O nas</Link>
          <Link href="#services">Usługi</Link>
          <Link href="#contact">Kontakt</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navigation;
