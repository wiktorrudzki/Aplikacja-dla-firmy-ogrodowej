import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import { ExtraLargeHeading, Paragraph } from "../typography";
import { NumberCardDetails } from "@src/types/cards";
import { t } from "@i18n";
import { AnimateCounter, AnimateCursorSpotlightOnHover } from "../animations";

type Props = {
  details: NumberCardDetails;
  index?: number;
};

const NumberCard = ({ details, index = 0 }: Props) => (
  <AnimateCursorSpotlightOnHover
    _hover={{
      scale: 1.05,
    }}
    transition="scale 0.25s ease"
    spotlightColor="green.200"
    borderRadius="2xl"
  >
    <VStack
      textAlign="center"
      bgColor="green.50"
      p="10"
      borderRadius="2xl"
      shadow="element"
    >
      <Box zIndex={0}>
        <ExtraLargeHeading fontWeight="extrabold" color="green.500">
          <AnimateCounter
            from={0}
            to={details.value}
            formatNumber={details.format}
            delay={index + 1 * 0.2}
          />
        </ExtraLargeHeading>
        <Paragraph
          textTransform="uppercase"
          width="min-content"
          fontWeight="bold"
        >
          {t(details.descriptionKey)}
        </Paragraph>
      </Box>
    </VStack>
  </AnimateCursorSpotlightOnHover>
);

export default NumberCard;
