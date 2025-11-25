import React, { useMemo } from "react";
import { useLocation } from "@reach/router";
import { Link as GatsbyLink } from "gatsby";
import { NAVIGATION_MODE } from "@src/types/navigation";
import { Heading3 } from "@src/components/typography";
import { Link } from "@chakra-ui/react";
import { useResponsiveValues } from "@src/hooks";

type Props = {
  to: string;
  children: React.ReactNode;
  noBackground?: boolean;
  mode?: NAVIGATION_MODE;
  ariaLabel?: string;
  tabIndex?: number;
  onClick?: () => void;
};

const CustomLink = ({
  to,
  children,
  noBackground,
  ariaLabel,
  tabIndex,
  mode = NAVIGATION_MODE.DARK,
  onClick,
}: Props) => {
  const location = useLocation();
  const { isMobile } = useResponsiveValues();
  const isActive = location.pathname.includes(to);

  const bgColor = useMemo(
    () => (mode === NAVIGATION_MODE.DARK ? "midnightGreen.400" : "white"),
    [mode],
  );

  const hoverTextColor = mode === NAVIGATION_MODE.DARK ? "white" : "black";

  return (
    <Link
      py="2"
      px="4"
      rounded="full"
      width="fit-content"
      transition="all 0.2s ease-in-out"
      bgColor={isActive && !noBackground ? bgColor : "transparent"}
      _hover={{
        bg: !noBackground ? bgColor : undefined,
        color: hoverTextColor,
      }}
      _focus={{
        boxShadow: "none",
        border: noBackground ? "none" : "1px solid",
        borderColor: noBackground ? "transparent" : bgColor,
      }}
      color={
        isMobile
          ? "black"
          : mode === NAVIGATION_MODE.DARK
            ? isActive
              ? "white"
              : "black"
            : isActive
              ? "black"
              : "white"
      }
      outline="none"
      border={!noBackground ? "1px solid" : "none"}
      borderColor={!noBackground ? bgColor : undefined}
      shadow={noBackground ? "initial" : "sm"}
      asChild
    >
      <GatsbyLink
        aria-label={ariaLabel}
        onClick={onClick}
        style={{ textDecoration: "none" }}
        to={to}
        tabIndex={tabIndex}
      >
        <Heading3 fontSize="lg" transition="color 0.2s ease-in-out">
          {children}
        </Heading3>
      </GatsbyLink>
    </Link>
  );
};

export default CustomLink;
