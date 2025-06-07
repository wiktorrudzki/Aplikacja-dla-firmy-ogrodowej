import { Button } from "@chakra-ui/react";
import { ROUTES } from "@src/constants";
import { Link } from "gatsby";
import React from "react";

type ContentCardButtonProps = {
  to: ROUTES;
  children: React.ReactNode;
};

function ContentCardButton({ to, children }: ContentCardButtonProps) {
  return (
    <Button colorPalette="green" rounded="full" paddingX={[4, 12, 16]} asChild>
      <Link to={to}>{children}</Link>
    </Button>
  );
}

export default ContentCardButton;
