import { Heading } from "@chakra-ui/react";
import { HeadingType } from "@src/types/typography";
import React from "react";

const Heading3 = ({ children, ...props }: HeadingType) => (
  <Heading as="h3" fontWeight="normal" size={{ base: "xl" }} {...props}>
    {children}
  </Heading>
);

export default Heading3;
