import { Button } from "@chakra-ui/react";
import { Link } from "gatsby";
import * as React from "react";

type PanelButtonProps = {
  to: string;
  children: React.ReactNode;
};

const PanelButton = ({ to, children }: PanelButtonProps) => (
  <Button
    variant="outline"
    color="white"
    _hover={{ color: "black" }}
    py={2}
    borderRadius={20}
    px={20}
    asChild
  >
    <Link to={to}>{children}</Link>
  </Button>
);

export default PanelButton;
