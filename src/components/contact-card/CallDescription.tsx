import { Link } from "@chakra-ui/react";
import { t } from "@src/utils/i18n";
import React from "react";

const CallDescription = () => {
  return (
    <Link href={`tel:${t("telephone-number")}`} textStyle="paragraph">
      {t("telephone-number")}
    </Link>
  );
};

export default CallDescription;
