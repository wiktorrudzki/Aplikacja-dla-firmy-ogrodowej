import { Box, BoxProps } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren &
  BoxProps & {
    spotlightColor: string;
    spotlightSize?: string;
    spotlightBlur?: string;
  };

const AnimateCursorSpotlightOnHover = ({
  children,
  spotlightColor,
  spotlightSize = "4rem",
  spotlightBlur = "1rem",
  ...rest
}: Props) => {
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget.classList.contains("animate-spotlight-cursor")) {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      event.currentTarget.style.setProperty("--x", `${x}px`);
      event.currentTarget.style.setProperty("--y", `${y}px`);
    }
  };

  return (
    <Box position="relative" overflow="hidden" {...rest}>
      <Box
        onMouseMove={handleMouseMove}
        className="animate-spotlight-cursor"
        _before={{
          content: '""',
          width: spotlightSize,
          height: spotlightSize,
          position: "absolute",
          opacity: 0,
          transform: "translate(-50%, -50%)",
          top: "var(--y)",
          left: "var(--x)",
          backgroundColor: spotlightColor,
          borderRadius: "100%",
          filter: `blur(${spotlightBlur})`,
          transition: "opacity 0.2s ease-in-out",
        }}
        _hover={{
          _before: {
            opacity: 1,
          },
        }}
        asChild
      >
        {children}
      </Box>
    </Box>
  );
};

export default AnimateCursorSpotlightOnHover;
