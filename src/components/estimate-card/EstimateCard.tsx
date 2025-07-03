import { Box, Flex, Stack, useToken } from "@chakra-ui/react";
import { t } from "@src/utils/i18n";
import React from "react";
import { MdPhone } from "react-icons/md";
import { Heading2, Paragraph } from "../typography";

type Props = {
  fixedBottomRight?: boolean;
};

const EstimateCard = ({ fixedBottomRight = true }: Props) => {
  const [green] = useToken("colors", ["green.500"]);

  return (
    <Box
      width="fit-content"
      bg="green.50"
      zIndex={1}
      rounded={32}
      py={4}
      px={{ base: 4, lg: 8 }}
      boxShadow="based"
      position={fixedBottomRight ? "fixed" : "initial"}
      bottom={{ base: 2, md: 4, "2xl": 8 }}
      right={{ base: 2, md: 4, "2xl": 8 }}
    >
      <Stack alignItems="center" gap={0.5}>
        <Paragraph textAlign="center">{t("Skorzystaj z darmowej")}</Paragraph>
        <Paragraph>{t("wyceny")}</Paragraph>
        <Flex gap={2} alignItems="center">
          <MdPhone size={16} color={green} />
          <Heading2
            fontSize={{ base: "lg", lg: "2xl" }}
            textAlign="center"
            color="green.500"
          >
            {t("telephone-number")}
          </Heading2>
        </Flex>
      </Stack>
    </Box>
  );
};

export default EstimateCard;
