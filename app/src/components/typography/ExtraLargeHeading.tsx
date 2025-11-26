import { Heading } from "@chakra-ui/react";
import { HeadingType } from "@src/types/typography";
import React from "react";

const ExtraLargeHeading = ({ children, ...props }: HeadingType) => (
  <Heading
    as="h1"
    fontWeight="normal"
    fontFamily="extra-large"
    size={{ base: "5xl" }}
    {...props}
  >
    {children}
  </Heading>
);

export default ExtraLargeHeading;
