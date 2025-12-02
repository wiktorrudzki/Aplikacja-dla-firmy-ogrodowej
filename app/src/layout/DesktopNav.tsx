import { Box } from "@chakra-ui/react";
import { NAVIGATION_MODE } from "@src/types/navigation";
import { t } from "@src/utils/i18n";
import React from "react";
import Link from "./Link";
import { ROUTES } from "@src/constants";
import DesktopNavDropDown from "./DesktopNavDropDown";

type Props = {
  navMode: NAVIGATION_MODE;
};

const DesktopNav = ({ navMode }: Props) => {
  return (
    <Box display={{ base: "none", md: "flex" }} gap={{ base: 2, lg: 4 }}>
      <Link mode={navMode} to={ROUTES.O_NAS}>
        {t("O nas")}
      </Link>
      <DesktopNavDropDown label={t("Usługi")} mode={navMode}>
        <Link mode={navMode} to={ROUTES.DLA_FIRM}>
          {t("business-client")}
        </Link>
        <Link mode={navMode} to={ROUTES.KLIENT_INDYWIDUALNY}>
          {t("individual-client")}
        </Link>
      </DesktopNavDropDown>
      <DesktopNavDropDown label={t("Galeria")} mode={navMode}>
        <Link mode={navMode} to={ROUTES.GALERIA_FIRMOWA}>
          {t("business-client")}
        </Link>
        <Link mode={navMode} to={ROUTES.GALERIA}>
          {t("individual-client")}
        </Link>
      </DesktopNavDropDown>
      <Link mode={navMode} to={ROUTES.KONTAKT}>
        {t("Kontakt")}
      </Link>
    </Box>
  );
};

export default DesktopNav;
