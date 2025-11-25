import { Box, Button } from "@chakra-ui/react";
import { ROUTES } from "@src/constants";
import { Link } from "gatsby";
import React from "react";
import { AnimateCursorSpotlightOnHover } from "../animations";

type Props = {
  to: ROUTES;
  ariaLabel?: string;
  children: React.ReactNode;
};

const ContentCardButton = ({ to, ariaLabel, children }: Props) => (
  <AnimateCursorSpotlightOnHover
    rounded="full"
    spotlightColor="midnightGreen.400"
  >
    <Button
      colorPalette="midnightGreen"
      rounded="full"
      aria-label={ariaLabel}
      paddingX={[4, 12, 16]}
    >
      <Box zIndex={0} asChild>
        <Link to={to} aria-label={ariaLabel}>
          {children}
        </Link>
      </Box>
    </Button>
  </AnimateCursorSpotlightOnHover>
);

export default ContentCardButton;
