import { Heading } from "@chakra-ui/react";
import { HeadingType } from "@src/types/typography";
import React from "react";

const Heading5 = ({ children, ...props }: HeadingType) => (
  <Heading as="h5" fontWeight="normal" size={{ base: "xl" }} {...props}>
    {children}
  </Heading>
);

export default Heading5;
