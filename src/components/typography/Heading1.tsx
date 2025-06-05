import { Heading } from "@chakra-ui/react";
import { HeadingType } from "@src/types/typography";
import React from "react";

const Heading1 = ({ children, ...props }: HeadingType) => (
  <Heading
    as="h1"
    fontWeight="normal"
    textTransform="uppercase"
    fontFamily="extra-extra-large"
    letterSpacing="wide"
    size={{ base: "5xl", lg: "7xl" }}
    {...props}
  >
    {children}
  </Heading>
);

export default Heading1;
