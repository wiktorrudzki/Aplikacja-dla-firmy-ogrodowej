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
  const { navigationHeightRem } = useResponsiveValues();
  return (
    <Container
      marginTop={formatToRem(navigationHeightRem + 3)}
      {...passThroughProps}
    >
      {children}
    </Container>
  );
};
export default NavigationMarginContainer;
