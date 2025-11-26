import React from "react";
import { Link } from "gatsby";
import { Image, useBreakpointValue } from "@chakra-ui/react";

import { NAVIGATION_MODE } from "@src/types/navigation";
import logoColor from "../assets/icons/logo-color.svg";
import logoWhite from "../assets/icons/logo-white.svg";
import logoColorMobile from "../assets/icons/logo-color-mobile.svg";
import logoWhiteMobile from "../assets/icons/logo-white-mobile.svg";
import { ROUTES } from "@src/constants";

type Props = {
  navMode: NAVIGATION_MODE;
};

const LogoNav = ({ navMode }: Props) => {
  const logoSrc = useBreakpointValue({
    base: navMode === "light" ? logoWhiteMobile : logoColorMobile,
    md: navMode === "light" ? logoWhite : logoColor,
  });

  return (
    <Link to={ROUTES.HOME} style={{ height: "100%", paddingBlock: "0.25rem" }}>
      <Image src={logoSrc} alt="Logo" height="100%" width="auto" />
    </Link>
  );
};

export default LogoNav;
