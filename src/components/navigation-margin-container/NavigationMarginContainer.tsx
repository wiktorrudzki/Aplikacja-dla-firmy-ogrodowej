import { Container } from "@chakra-ui/react";
import constants from "@src/constants";
import React from "react";

type Props = {
  children: React.ReactNode;
} & React.ComponentPropsWithRef<typeof Container>;

const NavigationMarginContainer = ({
  children,
  ...passThroughProps
}: Props) => (
  <Container
    marginTop={{
      base: `${constants.navigationBaseSizeRem}rem`, // calculation based on the navigation height in various resolution
      md: `${constants.navigationMdSizeRem}rem`, // calculation based on the navigation height in various resolution
    }}
    {...passThroughProps}
  >
    {children}
  </Container>
);

export default NavigationMarginContainer;
