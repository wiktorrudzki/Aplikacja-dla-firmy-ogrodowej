import React from "react";
import { HStack, Link } from "@chakra-ui/react";
import { MdMail, MdPhoneIphone } from "react-icons/md";

import { t } from "@i18n";
import NavContactBarItem from "./NavContactBarItem";

const NavContactBar = () => {
  return (
    <HStack
      textAlign="right"
      bgColor="primary.500"
      color="white"
      px="10"
      py="2"
      gap="6"
      justifyContent="end"
    >
      <Link
        aria-label={t("email-address")}
        href={`mailto:${t("email-address")}`}
        color="white"
      >
        <NavContactBarItem icon={MdMail}>
          {t("email-address")}
        </NavContactBarItem>
      </Link>

      <Link
        aria-label={t("Zadzwoń")}
        href={`tel:${t("telephone-number")}`}
        color="white"
      >
        <NavContactBarItem icon={MdPhoneIphone}>
          {t("telephone-number")}
        </NavContactBarItem>
      </Link>
    </HStack>
  );
};

export default NavContactBar;
