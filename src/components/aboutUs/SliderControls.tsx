import { Box, Container, Flex } from "@chakra-ui/react";
import * as React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import SliderCounter from "./SliderCounter";
import SliderButton from "./SliderButton";

const SliderControls = () => (
  <Box
    position="absolute"
    zIndex="1"
    bottom="0"
    right="0"
    width="100%"
    color="white"
  >
    <Flex alignItems="center" justifyContent="flex-end" gap={[3, 5]} p={5}>
      <SliderButton type="prev">
        <MdKeyboardArrowLeft />
      </SliderButton>
      <SliderButton type="next">
        <MdKeyboardArrowRight />
      </SliderButton>
      <Flex
        className="swiper-pagination"
        height={1}
        width={["24", "32", "60", "sm"]}
      />
      <SliderCounter />
    </Flex>
  </Box>
);

export default SliderControls;
