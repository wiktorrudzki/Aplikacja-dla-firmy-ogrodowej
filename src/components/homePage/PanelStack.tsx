import * as React from "react";
import { VStack } from "@chakra-ui/react";
import PanelButton from "./PanelButton";
import { t } from "@i18n";
import { ExtraExtraLargeHeading, Paragraph } from "@src/components/typography";

type PanelStackProps = {
  title: string;
  children: React.ReactNode;
  to: string;
};

const PanelStack = ({ title, children, to }: PanelStackProps) => {
  return (
    <VStack
      p={[1, 4]}
      gap={[3, 5, 30]}
      color="white"
      textAlign="center"
      maxWidth="xl"
    >
      <ExtraExtraLargeHeading>{title}</ExtraExtraLargeHeading>
      <Paragraph>{children}</Paragraph>
      <PanelButton to={to}>{t("explore-offer")}</PanelButton>
    </VStack>
  );
};

export default PanelStack;
