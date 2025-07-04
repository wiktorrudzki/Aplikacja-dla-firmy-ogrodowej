import { Container, ContainerProps } from "@chakra-ui/react";
import React from "react";

type Props = ContainerProps & React.PropsWithChildren;

const ContainerSection = ({ children, ...rest }: Props) => {
  return (
    <Container as="section" my={[10, 20, 24]} {...rest}>
      {children}
    </Container>
  );
};

export default ContainerSection;
