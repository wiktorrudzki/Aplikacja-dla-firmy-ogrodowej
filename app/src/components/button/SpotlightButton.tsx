import { Button } from "@chakra-ui/react";
import React from "react";
import { AnimateCursorSpotlightOnHover } from "../animations";

type Props = {
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
};

const SpotlightButton = ({ children, type, ariaLabel }: Props) => (
  <AnimateCursorSpotlightOnHover rounded="full" spotlightColor="primary.400">
    <Button
      colorPalette="primary"
      rounded="full"
      aria-label={ariaLabel}
      paddingX={[4, 12, 16]}
      type={type}
    >
      {children}
    </Button>
  </AnimateCursorSpotlightOnHover>
);

export default SpotlightButton;
