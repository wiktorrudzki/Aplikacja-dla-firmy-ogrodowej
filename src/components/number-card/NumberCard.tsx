import { VStack } from "@chakra-ui/react";
import React from "react";
import { ExtraLargeHeading, Paragraph } from "../typography";
import { NumberCardDetails } from "@src/types/cards";
import { t } from "@i18n";

type Props = {
  details: NumberCardDetails;
};

const NumberCard = ({ details }: Props) => (
  <VStack
    textAlign="center"
    bgColor="green.50"
    p="10"
    borderRadius="2xl"
    shadow="element"
  >
    <ExtraLargeHeading fontWeight="extrabold" color="green.500">
      {details.format ? details.format(details.value) : details.value}
    </ExtraLargeHeading>
    <Paragraph textTransform="uppercase" width="min-content" fontWeight="bold">
      {t(details.descriptionKey)}
    </Paragraph>
  </VStack>
);

export default NumberCard;
