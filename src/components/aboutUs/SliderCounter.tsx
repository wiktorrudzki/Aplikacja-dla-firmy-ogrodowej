import { Heading } from "@chakra-ui/react";
import * as React from "react";
import { useSwiper } from "swiper/react";
import { Swiper } from "swiper/types";

const formatCurrentSlide = (currentSlide: number) =>
  currentSlide < 10 ? `0${currentSlide}` : currentSlide;

export const SliderCounter = () => {
  const swiper = useSwiper();
  const [currentSlide, setCurrentSlide] = React.useState(1);

  const handleSlideChange = React.useCallback(
    (swiper: Swiper) => setCurrentSlide(swiper.activeIndex + 1),
    [],
  );

  React.useEffect(() => {
    swiper.on("slideChange", handleSlideChange);
    return () => swiper.off("slideChange", handleSlideChange);
  }, [swiper, handleSlideChange]);

  return (
    <Heading as="h2" textStyle="extra-extra-large" w="2ch">
      {formatCurrentSlide(currentSlide)}
    </Heading>
  );
};

export default SliderCounter;
