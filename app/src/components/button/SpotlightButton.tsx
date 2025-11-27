import { Button, ConditionalValue } from "@chakra-ui/react";
import React from "react";
import { AnimateCursorSpotlightOnHover } from "../animations";

type Props = {
  style?: React.CSSProperties;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs";
};

const SpotlightButton = ({ children, style, type, size, ariaLabel }: Props) => (
  <AnimateCursorSpotlightOnHover
    style={style}
    rounded="full"
    spotlightColor="primary.400"
  >
    <Button
      width="100%"
      colorPalette="primary"
      rounded="full"
      aria-label={ariaLabel}
      paddingX={[4, 12, 16]}
      type={type}
      size={size}
    >
      {children}
    </Button>
  </AnimateCursorSpotlightOnHover>
);

export default SpotlightButton;
