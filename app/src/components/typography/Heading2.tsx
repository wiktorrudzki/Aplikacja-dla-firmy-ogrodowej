import { Heading } from "@chakra-ui/react";
import { HeadingType } from "@src/types/typography";
import React from "react";

const Heading2 = ({ children, ...props }: HeadingType) => (
  <Heading as="h2" fontWeight="normal" size={{ base: "2xl" }} {...props}>
    {children}
  </Heading>
);

export default Heading2;
