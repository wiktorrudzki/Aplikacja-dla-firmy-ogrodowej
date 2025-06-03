import { Text } from "@chakra-ui/react";
import { t } from "@src/utils/i18n";
import React from "react";

const MailDescription = () => {
  return (
    <Text textStyle="paragraph" color="green.500" textDecoration="underline">
      {t("ogrodnikbernacki@gmail.com")}
    </Text>
  );
};

export default MailDescription;
