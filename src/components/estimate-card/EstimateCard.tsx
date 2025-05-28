import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import constants from "@src/constants";
import { t } from "@src/utils/i18n";
import React from "react";
import { MdPhone } from "react-icons/md";

type Props = {
  fixedBottomRight?: boolean;
};

const EstimateCard = ({ fixedBottomRight = true }: Props) => {
  return (
    <Box
      width="fit-content"
      bg="green.50"
      rounded={32}
      py={4}
      px={8}
      boxShadow="based"
      position={fixedBottomRight ? "fixed" : "initial"}
      bottom={8}
      right={8}
    >
      <Stack alignItems="center" gap={0.5}>
        <Text textStyle="paragraph" textAlign="center">
          {t("Skorzystaj z darmowej")}
        </Text>
        <Text textStyle="paragraph">{t("wyceny")}</Text>
        <Flex gap={2} alignItems="center">
          <MdPhone size={16} color="#6EAF3C" />
          <Text textAlign="center" textStyle="heading-2" color="green.500">
            {constants.PHONE_NUMBER}
          </Text>
        </Flex>
      </Stack>
    </Box>
  );
};

export default EstimateCard;
