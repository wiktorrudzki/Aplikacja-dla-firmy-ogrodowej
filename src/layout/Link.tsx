import React from "react";
import { useLocation } from "@reach/router";
import { Link as GatsbyLink } from "gatsby";
import { NAVIGATION_MODE } from "@src/types/navigation";
import { Heading3 } from "@src/components/typography";
import { Link } from "@chakra-ui/react";
import { useResponsiveValues } from "@src/hooks";

type Props = {
  to: string;
  children: React.ReactNode;
  noUnderline?: boolean;
  mode?: NAVIGATION_MODE;
  ariaLabel?: string;
  tabIndex?: number;
  onClick?: () => void;
};

const CustomLink = ({
  to,
  children,
  noUnderline,
  ariaLabel,
  tabIndex,
  mode = NAVIGATION_MODE.DARK,
  onClick,
}: Props) => {
  const location = useLocation();
  const { isMobile } = useResponsiveValues();
  const isActive = location.pathname.includes(to);

  return (
    <Link
      py="2"
      px="4"
      rounded="full"
      width="fit-content"
      bgColor={
        isActive && !noUnderline
          ? mode === NAVIGATION_MODE.DARK
            ? "green.400"
            : "white"
          : "transparent"
      }
      border={!noUnderline ? "1px solid " : "none"}
      borderColor={mode === NAVIGATION_MODE.DARK ? "green.400" : "White"}
      shadow={noUnderline ? "initial" : "sm"}
      asChild
    >
      <GatsbyLink
        aria-label={ariaLabel}
        onClick={onClick}
        style={{ textDecoration: "none" }}
        to={to}
        tabIndex={tabIndex}
      >
        <Heading3
          fontSize="lg"
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
        >
          {children}
        </Heading3>
      </GatsbyLink>
    </Link>
  );
};

export default CustomLink;
