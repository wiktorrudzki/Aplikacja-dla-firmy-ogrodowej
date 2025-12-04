import { Container, ContainerProps, useToken } from "@chakra-ui/react";
import React from "react";

type Props = ContainerProps & {
  children: React.ReactNode;
};

const MainCard = ({ children, ...passProps }: Props) => (
  <Container
    py={{
      base: 8,
      md: 8,
      lg: 12,
    }}
    px={{
      base: 8,
      lg: 16,
    }}
    borderRadius={16}
    {...passProps}
  >
    {children}
  </Container>
);

export default MainCard;
