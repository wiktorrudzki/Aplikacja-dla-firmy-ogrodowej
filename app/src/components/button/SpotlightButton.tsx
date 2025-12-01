import { Button } from "@chakra-ui/react";
import React from "react";
import { AnimateCursorSpotlightOnHover } from "../animations";

type Props = {
  style?: React.CSSProperties;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs";
  isLoading?: boolean;
};

const SpotlightButton = ({
  children,
  style,
  type,
  size,
  ariaLabel,
  isLoading,
}: Props) => (
  <AnimateCursorSpotlightOnHover
    style={style}
    rounded="full"
    spotlightColor="primary.400"
  >
    <Button
      loading={isLoading}
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
