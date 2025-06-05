import { Heading } from "@chakra-ui/react";
import { HeadingType } from "@src/types/typography";
import React from "react";

const Heading1 = ({ children, ...props }: HeadingType) => (
  <Heading as="h1" fontWeight="normal" size={{ base: "3xl" }} {...props}>
    {children}
  </Heading>
);

export default Heading1;
