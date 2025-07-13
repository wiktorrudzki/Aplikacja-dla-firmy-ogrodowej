import { IconButton } from "@chakra-ui/react";
import { NAVIGATION_MODE } from "@src/types/navigation";
import { t } from "@src/utils/i18n";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

type Props = {
  navMode: NAVIGATION_MODE;
  showNav: () => void;
};

const ShowMobileNav = ({ navMode, showNav }: Props) => (
  <IconButton
    bg="transparent"
    border="none"
    cursor="pointer"
    display={{ base: "flex", md: "none" }}
    onClick={showNav}
    aria-label={t("Kliknij, aby otworzyć nawigację")}
  >
    <GiHamburgerMenu
      color={navMode === NAVIGATION_MODE.DARK ? "black" : "white"}
      size={32}
    />
  </IconButton>
);

export default ShowMobileNav;
