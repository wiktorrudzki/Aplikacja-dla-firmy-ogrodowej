import React from "react";
import { MainCard } from "../main-card";
import { Separator, Stack } from "@chakra-ui/react";
import { Heading1, Paragraph } from "../typography";
import { t } from "@src/utils/i18n";
import { GoogleMap } from "../google-map";

const ServiceArea = () => {
  return (
    <MainCard my={["8", "12", "16"]} maxW={{ base: "90%", xl: "7xl" }}>
      <Stack gap={8}>
        <Separator
          margin="0 auto"
          w="20%"
          size="lg"
          borderColor="green.500"
          rounded={32}
        />
        <Heading1 textAlign="center">{t("service-area-title")}</Heading1>
        <Paragraph textAlign="center">
          {t("service-area-description")}
        </Paragraph>
        <GoogleMap />
      </Stack>
    </MainCard>
  );
};

export default ServiceArea;
