import React from "react";
import Link from "./Link";
import { Image, useBreakpointValue } from "@chakra-ui/react";
import { NAVIGATION_MODE } from "@src/types/navigation";
import logoWhite from "../assets/icons/logo-white.svg";
import logoBlack from "../assets/icons/logo-black.svg";
import logoWhiteMobile from "../assets/icons/logo-white-mobile.svg";
import logoBlackMobile from "../assets/icons/logo-black-mobile.svg";
import routes from "@data/routes.json";

type Props = {
  navMode: NAVIGATION_MODE;
};

const LogoNav = ({ navMode }: Props) => {
  const logoSrc = useBreakpointValue({
    base: navMode === "light" ? logoWhiteMobile : logoBlackMobile,
    md: navMode === "light" ? logoWhite : logoBlack,
  });

  return (
    <Link to={routes.HOME} noUnderline>
      <Image
        src={logoSrc}
        alt="logo"
        maxHeight={{ base: "10", md: "16", lg: "20" }}
      />
    </Link>
  );
};

export default LogoNav;
