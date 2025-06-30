import { Button, ButtonProps } from "@chakra-ui/react";
import { ROUTES } from "@src/constants";
import { Link } from "gatsby";
import * as React from "react";

type Props = React.PropsWithChildren &
  ButtonProps & {
    to: ROUTES;
    active: boolean;
  };

const CategoryButton = ({ children, active, to, ...props }: Props) => (
  <Link to={to}>
    <Button
      aria-label={`category-${children?.toString()}-button`}
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
  </Link>
);

export default CategoryButton;
