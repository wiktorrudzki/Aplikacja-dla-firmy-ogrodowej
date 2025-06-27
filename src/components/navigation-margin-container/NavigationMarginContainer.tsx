import { Container } from "@chakra-ui/react";
import { formatToRem } from "@src/helpers";
import { useResponsiveValues } from "@src/hooks";
import React from "react";

type Props = {
  children: React.ReactNode;
} & React.ComponentPropsWithRef<typeof Container>;

const NavigationMarginContainer = ({
  children,
  ...passThroughProps
}: Props) => {
  const { navigationHeighRem } = useResponsiveValues();
  return (
    <Container
      marginTop={formatToRem(navigationHeighRem + 1)}
      {...passThroughProps}
    >
      {children}
    </Container>
  );
};
export default NavigationMarginContainer;
