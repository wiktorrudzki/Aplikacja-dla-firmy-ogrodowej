import { Box, IconButton, Stack } from "@chakra-ui/react";
import { NAVIGATION_MODE } from "@src/types/navigation";
import React, { useCallback, useRef } from "react";
import { CgClose } from "react-icons/cg";
import Link from "./Link";
import { t } from "@src/utils/i18n";
import { ROUTES } from "@src/constants";
import MobileCollapsibleLink, {
  MobileCollapsibleActions,
} from "./MobileCollapsibleLink";

type Props = {
  hidden: boolean;
  navMode: NAVIGATION_MODE;
  onClose: () => void;
};

const MobileNav = ({ navMode, hidden, onClose }: Props) => {
  const servicesCollapsibleRef = React.useRef<MobileCollapsibleActions>(null);

  const handleClose = useCallback(() => {
    servicesCollapsibleRef?.current?.close();
    onClose();
  }, [onClose]);

  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="0"
        height="full"
        w="full"
        bgColor="blackAlpha.500"
        onClick={handleClose}
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
          onClick={handleClose}
          width="100%"
          display="flex"
          justifyContent="flex-end"
        >
          <CgClose size={32} color="black" />
        </IconButton>
        <Link onClick={handleClose} noUnderline to={ROUTES.O_NAS}>
          {t("O nas")}
        </Link>
        <MobileCollapsibleLink label={t("Usługi")} ref={servicesCollapsibleRef}>
          <Link onClick={handleClose} noUnderline to={ROUTES.DLA_FIRM}>
            {t("business-client")}
          </Link>
          <Link
            onClick={handleClose}
            noUnderline
            to={ROUTES.KLIENT_INDYWIDUALNY}
          >
            {t("individual-client")}
          </Link>
        </MobileCollapsibleLink>
        <Link onClick={handleClose} noUnderline to={ROUTES.GALERIA}>
          {t("Galeria")}
        </Link>
        <Link onClick={handleClose} noUnderline to={ROUTES.KONTAKT}>
          {t("Kontakt")}
        </Link>
      </Stack>
    </>
  );
};

export default React.memo(MobileNav);
