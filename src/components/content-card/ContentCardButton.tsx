import { Button } from "@chakra-ui/react";
import { ROUTES } from "@src/constants";
import { Link } from "gatsby";
import React from "react";

type Props = {
  to: ROUTES;
  ariaLabel?: string;
  children: React.ReactNode;
};

const ContentCardButton = ({ to, ariaLabel, children }: Props) => (
  <Button
    colorPalette="green"
    rounded="full"
    aria-label={ariaLabel}
    paddingX={[4, 12, 16]}
    asChild
  >
    <Link to={to} aria-label={ariaLabel}>
      {children}
    </Link>
  </Button>
);

export default ContentCardButton;
