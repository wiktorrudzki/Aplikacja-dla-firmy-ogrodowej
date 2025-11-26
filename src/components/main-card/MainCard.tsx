import { Container, ContainerProps, useToken } from "@chakra-ui/react";
import React from "react";

type Props = ContainerProps & {
  children: React.ReactNode;
};

const MainCard = ({ children, ...passProps }: Props) => {
  const mainCard = useToken("colors", ["mainCard.50", "mainCard.100"]);

  return (
    <Container
      bgGradient={`radial-gradient(circle at bottom right, ${mainCard[0]}, ${mainCard[1]})`}
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
      boxShadow="element"
      {...passProps}
    >
      {children}
    </Container>
  );
};

export default MainCard;
