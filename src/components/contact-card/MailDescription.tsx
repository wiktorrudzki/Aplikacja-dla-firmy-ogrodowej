import { Link } from "@chakra-ui/react";
import { t } from "@src/utils/i18n";
import React from "react";

const MailDescription = () => {
  return (
    <Link
      href={`mailto:${t("email-address")}`}
      textStyle="paragraph"
      color="midnightGreen.500"
      textDecor="underline"
    >
      {t("email-address")}
    </Link>
  );
};

export default MailDescription;
