import { Container } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const MainCard = ({ children }: Props) => {
  return (
    <Container
      bgGradient="radial-gradient(circle at bottom right, #EBF8FF, #EBF4E4)" // hardcode colors becuase cannot reference the variable from here
      py={{
        base: 4,
        lg: 12,
      }}
      px={{
        base: 8,
        lg: 16,
      }}
      borderRadius={16}
      boxShadow="element"
    >
      {children}
    </Container>
  );
};

export default MainCard;
