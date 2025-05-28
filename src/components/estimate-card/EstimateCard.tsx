import { Flex, Stack, Text } from "@chakra-ui/react";
import constants from "@src/constants";
import { t } from "@src/utils/i18n";
import React from "react";
import { MdPhone } from "react-icons/md";

type Props = {
  fixedBottomRight?: boolean;
};

const EstimateCard = ({ fixedBottomRight = true }: Props) => {
  return (
    <Stack
      width="fit-content"
      bg="green.50"
      rounded={32}
      alignItems="center"
      gap={0.5}
      py={4}
      px={8}
      boxShadow="element"
      position="fixed"
      bottom={8}
      right={8}
    >
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
  );
};

export default EstimateCard;
