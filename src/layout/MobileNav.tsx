import { Box, IconButton, Stack } from "@chakra-ui/react";
import { NAVIGATION_MODE } from "@src/types/navigation";
import React from "react";
import { CgClose } from "react-icons/cg";
import Link from "./Link";
import { t } from "@src/utils/i18n";
import { ROUTES } from "@src/constants";
import { useResponsiveValues } from "@src/hooks";
import { formatToRem } from "@src/helpers";

type Props = {
  hidden: boolean;
  navMode: NAVIGATION_MODE;
  onClose: () => void;
};

const MobileNav = ({ navMode, hidden, onClose }: Props) => {
  const { navigationHeighRem } = useResponsiveValues();
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
        px={8}
        gap={8}
        transition="transform 0.3s ease"
      >
        <IconButton
          bg="transparent"
          border="none"
          cursor="pointer"
          onClick={onClose}
          width="100%"
          display="flex"
          height={formatToRem(navigationHeighRem)}
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
    </>
  );
};

export default MobileNav;
