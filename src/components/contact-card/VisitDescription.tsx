import { chakra, Stack, Text } from "@chakra-ui/react";
import { t } from "@src/utils/i18n";
import React from "react";

const VisitDescription = () => {
  return (
    <Stack alignItems="center" gap={0.5}>
      <Text textStyle="paragraph">
        {t("Usługi ogrodnicze")} <chakra.span color="green.500">M</chakra.span>
        ateusz <chakra.span color="green.500">B</chakra.span>ernacki
      </Text>
      <Text textStyle="paragraph">{`${t("ul. Nowa 117")}`}</Text>
      <Text textStyle="paragraph">{`${t("44-264 Jankowice Rybnickie")}`}</Text>
      <Text textStyle="paragraph">{`${t("NIP: 123-456-789")}`}</Text>
    </Stack>
  );
};

export default VisitDescription;
