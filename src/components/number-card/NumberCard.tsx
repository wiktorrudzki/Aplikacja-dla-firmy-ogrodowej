import { VStack } from "@chakra-ui/react";
import React from "react";
import { ExtraLargeHeading, Paragraph } from "../typography";
import { NumberCardData } from "@src/types/cards";

type Props = {
  data: NumberCardData;
};

const NumberCard = ({ data }: Props) => (
  <VStack
    textAlign="center"
    bgColor="green.50"
    p="10"
    borderRadius="2xl"
    shadow="element"
  >
    <ExtraLargeHeading fontWeight="extrabold" color="green.500">
      {data.format ? data.format(data.value) : data.value}
    </ExtraLargeHeading>
    <Paragraph textTransform="uppercase" width="min-content" fontWeight="bold">
      {data.description}
    </Paragraph>
  </VStack>
);

export default NumberCard;
