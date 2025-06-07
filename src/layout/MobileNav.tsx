import { IconButton, Stack } from "@chakra-ui/react";
import { NAVIGATION_MODE } from "@src/types/navigation";
import React from "react";
import { CgClose } from "react-icons/cg";
import Link from "./Link";
import { t } from "@src/utils/i18n";
import { ROUTES } from "@src/constants";

type Props = {
  hidden: boolean;
  navMode: NAVIGATION_MODE;
  onClose: () => void;
};

const MobileNav = ({ navMode, hidden, onClose }: Props) => {
  return (
    <Stack
      bg="white"
      position="fixed"
      height="100%"
      top="0"
      right="0"
      width="80%"
      display={{ base: "flex", md: "none" }}
      transform={hidden ? "translateX(100%)" : "translateX(0)"}
      py={16}
      px={16}
      gap={16}
      transition="transform 0.3s ease"
    >
      <IconButton
        bg="transparent"
        border="none"
        cursor="pointer"
        onClick={onClose}
        width="100%"
        display="flex"
        justifyContent="flex-end"
      >
        <CgClose size={32} color="black" />
      </IconButton>
      <Link onClick={onClose} noUnderline to={ROUTES.O_NAS}>
        {t("O nas")}
      </Link>
      <Link onClick={onClose} noUnderline to={ROUTES.DLA_FIRM}>
        {t("Usługi")}
      </Link>
      <Link onClick={onClose} noUnderline to={ROUTES.GALERIA}>
        {t("Galeria")}
      </Link>
      <Link onClick={onClose} noUnderline to={ROUTES.KONTAKT}>
        {t("Kontakt")}
      </Link>
    </Stack>
  );
};

export default MobileNav;
