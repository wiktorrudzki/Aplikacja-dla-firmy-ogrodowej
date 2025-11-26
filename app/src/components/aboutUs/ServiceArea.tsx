import React from "react";
import { MainCard } from "../main-card";
import { Separator, Stack } from "@chakra-ui/react";
import { Heading1, Paragraph } from "../typography";
import { t } from "@src/utils/i18n";
import { GoogleMap } from "../google-map";
import { ContainerSection } from "../section";

const ServiceArea = () => {
  return (
    <ContainerSection>
      <MainCard maxW={{ base: "90%", xl: "7xl" }}>
        <Stack gap={8}>
          <Separator
            margin="0 auto"
            w="20%"
            size="lg"
            borderColor="primary.500"
            rounded={32}
          />
          <Heading1 textAlign="center">{t("service-area-title")}</Heading1>
          <Paragraph textAlign="center">
            {t("service-area-description")}
          </Paragraph>
          <GoogleMap />
        </Stack>
      </MainCard>
    </ContainerSection>
  );
};

export default ServiceArea;
