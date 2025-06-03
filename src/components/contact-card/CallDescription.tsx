import { Text } from "@chakra-ui/react";
import { t } from "@src/utils/i18n";
import React from "react";

const CallDescription = () => {
  return <Text textStyle="paragraph">{t("+48 731 169 911")}</Text>;
};

export default CallDescription;
