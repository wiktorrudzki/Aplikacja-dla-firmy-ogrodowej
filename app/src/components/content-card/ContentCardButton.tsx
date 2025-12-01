import { Box } from "@chakra-ui/react";
import { ROUTES } from "@src/constants";
import { Link } from "gatsby";
import React from "react";
import { SpotlightButton } from "../button";

type Props = {
  to: ROUTES;
  ariaLabel?: string;
  children: React.ReactNode;
};

const ContentCardButton = ({ to, ariaLabel, children }: Props) => (
  <SpotlightButton>
    <Box zIndex={0} asChild>
      <Link to={to} aria-label={ariaLabel}>
        {children}
      </Link>
    </Box>
  </SpotlightButton>
);

export default ContentCardButton;
