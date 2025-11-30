import { Container, ContainerProps, useToken } from "@chakra-ui/react";
import React from "react";

type Props = ContainerProps;

const RadialBackgroundContainer = (props: Props) => {
  const secondary = useToken("colors", ["secondary.100"]);

  return (
    <Container
      {...props}
      bgGradient={{
        base: `radial-gradient(circle, ${secondary} 75%, white)`,
        lg: `radial-gradient(circle farthest-side, ${secondary} 75%, white)`,
      }}
    />
  );
};

export default RadialBackgroundContainer;
