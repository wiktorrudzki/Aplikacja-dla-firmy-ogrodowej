import { Box, IconButton, Stack } from "@chakra-ui/react";
import { NAVIGATION_MODE } from "@src/types/navigation";
import React from "react";
import routes from "@data/routes.json";
import { CgClose } from "react-icons/cg";
import Link from "./Link";
import { t } from "@src/utils/i18n";

type Props = {
  hidden: boolean;
  navMode: NAVIGATION_MODE;
  onClose: () => void;
};

const MobileNav = ({ navMode, hidden, onClose }: Props) => {
  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="0"
        height="full"
        w="full"
        bgColor="blackAlpha.500"
        onClick={onClose}
        pointerEvents={hidden ? "none" : "initial"}
        opacity={hidden ? "0" : "1"}
        transition="opacity 200ms ease-in-out"
      />
      <Stack
        bg="white"
        position="fixed"
        height="100%"
        top="0"
        right="0"
        width="80%"
        display={{ base: "flex", md: "none" }}
        transform={hidden ? "translateX(100%)" : "translateX(0)"}
        py={8}
        px={8}
        gap={10}
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
        <Link onClick={onClose} noUnderline to={routes.O_NAS}>
          {t("O nas")}
        </Link>
        <Link onClick={onClose} noUnderline to={routes.DLA_FIRM}>
          {t("Usługi")}
        </Link>
        <Link onClick={onClose} noUnderline to={routes.GALERIA}>
          {t("Galeria")}
        </Link>
        <Link onClick={onClose} noUnderline to={routes.KONTAKT}>
          {t("Kontakt")}
        </Link>
      </Stack>
    </>
  );
};

export default MobileNav;
