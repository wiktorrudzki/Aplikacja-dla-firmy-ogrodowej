import React from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import { NAVIGATION_MODE } from "@src/types/navigation";
import { Heading3 } from "@src/components/typography";

type Props = {
  to: string;
  children: React.ReactNode;
  noUnderline?: boolean;
  mode?: NAVIGATION_MODE;
  ariaLabel?: string;
  onClick?: () => void;
};

const CustomLink = ({
  to,
  children,
  noUnderline,
  ariaLabel,
  mode = NAVIGATION_MODE.DARK,
  onClick,
}: Props) => {
  const location = useLocation();

  return (
    <Link
      aria-label={ariaLabel}
      onClick={onClick}
      style={{ textDecoration: "none" }}
      to={to}
    >
      <Heading3
        color={mode === NAVIGATION_MODE.DARK ? "black" : "white"}
        position="relative"
        textDecoration="none"
        margin={0}
        _after={
          location.pathname.includes(to) && !noUnderline
            ? {
                content: '""',
                position: "absolute",
                left: "10%",
                bottom: "-5px",
                width: "80%",
                height: "2px",
                bg: mode === NAVIGATION_MODE.DARK ? "black" : "white",
                borderRadius: "2px",
              }
            : {}
        }
      >
        {children}
      </Heading3>
    </Link>
  );
};

export default CustomLink;
