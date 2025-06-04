import { chakra, Stack, Text } from "@chakra-ui/react";
import { t } from "@src/utils/i18n";
import React from "react";

const VisitDescription = () => {
  return (
    <Stack alignItems="center" gap={0}>
      <Text textStyle="paragraph">
        {t("Usługi ogrodnicze")} <chakra.span color="green.500">M</chakra.span>
        ateusz <chakra.span color="green.500">B</chakra.span>ernacki
      </Text>
      <Text
        width="100%"
        textAlign="center"
        whiteSpace="pre-line"
        textStyle="paragraph"
      >
        {t("address-details-shorten")}
      </Text>
    </Stack>
  );
};

export default VisitDescription;
