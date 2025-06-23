import { chakra, Stack } from "@chakra-ui/react";
import { t } from "@src/utils/i18n";
import React from "react";
import { Paragraph } from "../typography";

const VisitDescription = () => {
  return (
    <Stack alignItems="center" gap={0}>
      <Paragraph>
        {t("Usługi ogrodnicze")} <chakra.span color="green.500">M</chakra.span>
        ateusz <chakra.span color="green.500">B</chakra.span>ernacki
      </Paragraph>
      <Paragraph width="100%" textAlign="center" whiteSpace="pre-line">
        {t("address-details-shorten")}
      </Paragraph>
    </Stack>
  );
};

export default VisitDescription;
