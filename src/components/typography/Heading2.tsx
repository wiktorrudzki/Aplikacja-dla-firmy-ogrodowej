import { Heading } from "@chakra-ui/react";
import { HeadingType } from "@src/types/typography";
import React from "react";

const Heading2 = ({ children, ...props }: HeadingType) => (
  <Heading
    as="h2"
    fontWeight="normal"
    fontFamily="extra-large"
    size={{ base: "5xl" }}
    {...props}
  >
    {children}
  </Heading>
);

export default Heading2;
