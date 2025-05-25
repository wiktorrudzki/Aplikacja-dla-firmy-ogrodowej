import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import constants from "@src/constants";
import { t } from "@src/utils/i18n";
import React from "react";
import { BiPhone } from "react-icons/bi";
import { BsArrowUp } from "react-icons/bs";

type Props = {
  showScroller?: boolean;
};

const EstimateCard = ({ showScroller = false }: Props) => {
  return (
    <Stack width="fit-content">
      {showScroller && (
        <Box borderRadius="50%" bg="green.50">
          <BsArrowUp size={58} />
        </Box>
      )}
      <Stack bg="green.50">
        <Text>{t("Skorzystaj z darmowej wyceny")}</Text>
        <Flex>
          <BiPhone />
          <Text>{constants.PHONE_NUMBER}</Text>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default EstimateCard;
