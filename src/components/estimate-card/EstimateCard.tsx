import { Box, Flex, Stack } from "@chakra-ui/react";
import { t } from "@src/utils/i18n";
import React from "react";
import { MdPhone } from "react-icons/md";
import { Heading2, Paragraph } from "../typography";

type Props = {
  fixedBottomRight?: boolean;
};

const EstimateCard = ({ fixedBottomRight = true }: Props) => (
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
      <Paragraph textAlign="center">{t("Skorzystaj z darmowej")}</Paragraph>
      <Paragraph>{t("wyceny")}</Paragraph>
      <Flex gap={2} alignItems="center">
        <MdPhone size={16} color="#6EAF3C" />
        <Heading2 textAlign="center" color="green.500">
          {t("telephone-number")}
        </Heading2>
      </Flex>
    </Stack>
  </Box>
);

export default EstimateCard;
