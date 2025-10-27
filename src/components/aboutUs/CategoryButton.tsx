import { Button, ButtonProps } from "@chakra-ui/react";
import * as React from "react";

type Props = React.PropsWithChildren &
  ButtonProps & {
    active: boolean;
    ariaLabel: string;
  };

const CategoryButton = ({ children, active, ariaLabel, ...props }: Props) => (
  <Button
    rounded={16}
    size="xl"
    color={active ? "white" : "black"}
    bg={active ? "green.500" : "transparent"}
    _hover={{ color: "white", bg: "green.500" }}
    h="fit-content"
    border="none"
    paddingY={1.5}
    {...props}
  >
    {children}
  </Button>
);

export default CategoryButton;
