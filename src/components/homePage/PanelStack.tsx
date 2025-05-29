import * as React from "react";
import { VStack, Text, Heading } from "@chakra-ui/react";
import PanelButton from "./PanelButton";
import { t } from "@i18n";

interface PanelStackProps {
  title: string;
  children: React.ReactNode;
  to: string;
}

const PanelStack = ({ title, children, to }: PanelStackProps) => {
  return (
    <VStack
      p={[1, 4]}
      gap={[5, 30]}
      color="white"
      textAlign="center"
      maxWidth={800}
    >
      <Heading
        as="h1"
        textStyle="extra-extra-large"
        fontSize={["4xl", "6xl"]}
        textTransform="uppercase"
      >
        {title}
      </Heading>
      <Text textStyle="paragraph">{children}</Text>
      <PanelButton to={to}>{t("explore-offer")}</PanelButton>
    </VStack>
  );
};

export default PanelStack;
