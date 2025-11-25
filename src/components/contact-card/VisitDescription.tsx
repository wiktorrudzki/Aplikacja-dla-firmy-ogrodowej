import { chakra, Stack } from "@chakra-ui/react";
import { t } from "@src/utils/i18n";
import React from "react";
import { Paragraph } from "../typography";

const VisitDescription = () => {
  return (
    <Stack alignItems="center" gap={0}>
      <Paragraph>
        <chakra.span color="midnightGreen.500">
          {t("Usługi ogrodnicze")}
        </chakra.span>{" "}
        <chakra.span color="oceanGreen.500">Mateusz Bernacki</chakra.span>
      </Paragraph>
      <Paragraph width="100%" textAlign="center" whiteSpace="pre-line">
        {t("address-details-shorten")}
      </Paragraph>
    </Stack>
  );
};

export default VisitDescription;
