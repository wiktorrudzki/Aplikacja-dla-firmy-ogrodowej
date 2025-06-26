import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import { MainCard } from "../main-card";
import { Heading1, Paragraph } from "../typography";
import { ContentCard, ContentCardButton } from "../content-card";
import { t } from "@src/utils/i18n";
import { OurService } from "@src/types/services";

type Props = {
  service: OurService;
};

const OurServiceContent = ({ service }: Props) => (
  <ContentCard m={0} gap={[6, 12]}>
    <Heading1 textAlign="center">{service.title}</Heading1>
    <Paragraph textAlign="center">{service.aboutDescription}</Paragraph>
    <ContentCardButton to={service.route}>
      {t("Poznaj ofertę")}
    </ContentCardButton>
  </ContentCard>
);

export default OurServiceContent;
