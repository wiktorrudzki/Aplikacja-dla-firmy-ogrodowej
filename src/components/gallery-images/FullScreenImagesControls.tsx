import { Flex } from "@chakra-ui/react";
import React from "react";
import SliderButton from "../aboutUs/SliderButton";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

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
    paddingX={8}
  >
    <SliderButton type="prev">
      <MdKeyboardArrowLeft />
    </SliderButton>
    <SliderButton type="next">
      <MdKeyboardArrowRight />
    </SliderButton>
  </Flex>
);

export default FullScreenImagesControls;
