import { Container } from "@chakra-ui/react";
import { NAVIGATION_MODE } from "@src/types/navigation";
import { t } from "@src/utils/i18n";
import React from "react";
import Link from "./Link";
import routes from "@data/routes.json";

type Props = {
  navMode: NAVIGATION_MODE;
};

const DesktopNav = ({ navMode }: Props) => {
  return (
    <Container
      display={{ base: "none", md: "flex" }}
      gap={{ base: 24, lg: 64 }}
    >
      <Link mode={navMode} to={routes.O_NAS}>
        {t("O nas")}
      </Link>
      <Link mode={navMode} to={routes.DLA_FIRM}>
        {t("Usługi")}
      </Link>
      <Link mode={navMode} to={routes.GALERIA}>
        {t("Galeria")}
      </Link>
      <Link mode={navMode} to={routes.KONTAKT}>
        {t("Kontakt")}
      </Link>
    </Container>
  );
};

export default DesktopNav;
