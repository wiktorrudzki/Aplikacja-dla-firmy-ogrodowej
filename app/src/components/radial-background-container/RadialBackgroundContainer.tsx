import { Container, ContainerProps, useToken } from "@chakra-ui/react";
import React from "react";

type Props = ContainerProps & {
  gradientWidth?: string;
};

const RadialBackgroundContainer = ({ gradientWidth, ...props }: Props) => {
  const secondary = useToken("colors", ["secondary.100"]);

  return (
    <Container
      {...props}
      bgGradient={{
        base: `radial-gradient(circle, ${secondary} ${gradientWidth ?? 50}%, white)`,
        lg: `radial-gradient(circle farthest-side, ${secondary} ${gradientWidth ?? "75%"}, white)`,
      }}
    />
  );
};

export default RadialBackgroundContainer;
