import { Box } from "@chakra-ui/react";
import { NAVIGATION_MODE } from "@src/types/navigation";
import { t } from "@src/utils/i18n";
import React from "react";
import Link from "./Link";
import { ROUTES } from "@src/constants";

type Props = {
  navMode: NAVIGATION_MODE;
};

const DesktopNav = ({ navMode }: Props) => {
  return (
    <Box display={{ base: "none", md: "flex" }} gap={{ base: 6, lg: 16 }}>
      <Link mode={navMode} to={ROUTES.O_NAS}>
        {t("O nas")}
      </Link>
      <Link mode={navMode} to={ROUTES.DLA_FIRM}>
        {t("Usługi")}
      </Link>
      <Link mode={navMode} to={ROUTES.GALERIA}>
        {t("Galeria")}
      </Link>
      <Link mode={navMode} to={ROUTES.KONTAKT}>
        {t("Kontakt")}
      </Link>
    </Box>
  );
};

export default DesktopNav;
