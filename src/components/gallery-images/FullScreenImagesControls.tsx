import { Flex } from "@chakra-ui/react";
import React from "react";
import SliderButton from "../aboutUs/SliderButton";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { t } from "@src/utils/i18n";

const FullScreenImagesControls = () => (
  <Flex
    position="absolute"
    zIndex={100}
    bottom="0"
    right="0"
    width="100%"
    color="white"
    justify="space-between"
    h="100%"
    align="center"
    paddingX={{ base: 2, lg: 4, "2xl": 8 }}
  >
    <SliderButton type="prev">
      <MdKeyboardArrowLeft
        aria-label={t("Kliknij, aby przejść do poprzedniego")}
      />
    </SliderButton>
    <SliderButton type="next">
      <MdKeyboardArrowRight
        aria-label={t("Kliknij, aby przejsć do następnego")}
      />
    </SliderButton>
  </Flex>
);

export default FullScreenImagesControls;
