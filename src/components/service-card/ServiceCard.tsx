import { Box, Stack, Text } from "@chakra-ui/react";
import { Service } from "@src/types/services";
import { t } from "@src/utils/i18n";
import React from "react";

type Props = {
  card: Service;
};

const ServiceCard = ({ card }: Props) => {
  return (
    <Stack
      rounded={8}
      width={300}
      height={300}
      bg="rgba(0,0,0,0.25)"
      justify="center"
      align="center"
      gap={4}
      position="relative"
    >
      {card.image}
      <Box color="white" width={20} height={20} as={card.icon} />
      <Text textAlign="center" textStyle="heading-2" color="white">
        {t(card.text)}
      </Text>
    </Stack>
  );
};

export default ServiceCard;
