import { Heading } from "@chakra-ui/react";
import { HeadingType } from "@src/types/typography";
import React from "react";

const Heading1Anton = ({ children, ...props }: HeadingType) => (
  <Heading
    as="h1"
    fontWeight="normal"
    size={{ base: "4xl" }}
    textTransform="uppercase"
    fontFamily="extra-large"
    letterSpacing="wide"
    {...props}
  >
    {children}
  </Heading>
);

export default Heading1Anton;
