import { Heading } from "@chakra-ui/react";
import { HeadingType } from "@src/types/typography";
import React from "react";

const ExtraExtraLargeHeading = ({ children, ...props }: HeadingType) => (
  <Heading
    as="h1"
    fontWeight="normal"
    textTransform="uppercase"
    fontFamily="extra-extra-large"
    letterSpacing="wide"
    size={{ base: "4xl", md: "5xl", lg: "7xl" }}
    {...props}
  >
    {children}
  </Heading>
);

export default ExtraExtraLargeHeading;
