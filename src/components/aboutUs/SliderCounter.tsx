import { Heading } from "@chakra-ui/react";
import * as React from "react";
import { useSwiper } from "swiper/react";

const formatCurrentSlide = (currentSlide: number) => {
  if (currentSlide < 10) return `0${currentSlide}`;
  return currentSlide;
};

export const SliderCounter = () => {
  const swiper = useSwiper();
  const [currentSlide, setCurrentSlide] = React.useState(1);

  React.useEffect(() => {
    swiper.on("slideChange", (swiper) =>
      setCurrentSlide(swiper.activeIndex + 1),
    );
  }, [swiper]);

  return (
    <Heading as="h2" textStyle="extra-extra-large" w="2ch">
      {formatCurrentSlide(currentSlide)}
    </Heading>
  );
};

export default SliderCounter;
