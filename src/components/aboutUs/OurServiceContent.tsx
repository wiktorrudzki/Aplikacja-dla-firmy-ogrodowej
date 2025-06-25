import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import { MainCard } from "../main-card";
import { Heading1, Paragraph } from "../typography";
import { ContentCardButton } from "../content-card";
import { t } from "@src/utils/i18n";
import { OurService } from "@src/types/services";

type Props = {
  service: OurService;
};

const OurServiceContent = ({ service }: Props) => (
  <Box flex="1">
    <MainCard h="100%">
      <VStack h="100%" justify="center" gap={{ base: 4, lg: 8, xl: 16 }}>
        <Heading1 textAlign="center">{service.title}</Heading1>
        <Paragraph textAlign="center">{service.aboutDescription}</Paragraph>
        <ContentCardButton to={service.route}>
          {t("Poznaj ofertę")}
        </ContentCardButton>
      </VStack>
    </MainCard>
  </Box>
);

export default OurServiceContent;
