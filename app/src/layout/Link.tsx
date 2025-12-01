import React, { useMemo } from "react";
import { useLocation } from "@reach/router";
import { Link as GatsbyLink } from "gatsby";
import { NAVIGATION_MODE } from "@src/types/navigation";
import { Heading3 } from "@src/components/typography";
import { Link } from "@chakra-ui/react";
import { useResponsiveValues } from "@src/hooks";
import "./Link.css";

type Props = {
  to: string;
  children: React.ReactNode;
  mode?: NAVIGATION_MODE;
  ariaLabel?: string;
  tabIndex?: number;
  onClick?: () => void;
};

const CustomLink = ({
  to,
  children,
  ariaLabel,
  tabIndex,
  mode = NAVIGATION_MODE.DARK,
  onClick,
}: Props) => {
  const location = useLocation();
  const { isMobile } = useResponsiveValues();
  const isActive = location.pathname.includes(to);

  const isDark = mode === NAVIGATION_MODE.DARK;

  const getColor = () => {
    if (isMobile) {
      return "black";
    }

    return isDark ? "black" : "white";
  };

  return (
    <Link
      py="2"
      px="4"
      rounded="full"
      width="fit-content"
      transition="all 0.2s ease-in-out"
      bgColor="transparent"
      color={getColor()}
      outline="none"
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
          className={isActive ? "active navLink" : "navLink"}
          fontSize="lg"
          _after={{ backgroundColor: isDark ? "primary.500" : "white" }}
          transition="color 0.2s ease-in-out"
        >
          {children}
        </Heading3>
      </GatsbyLink>
    </Link>
  );
};

export default CustomLink;
