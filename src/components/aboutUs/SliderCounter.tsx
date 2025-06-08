import * as React from "react";
import { useSwiper } from "swiper/react";
import { Swiper } from "swiper/types";
import { ExtraExtraLargeHeading } from "../typography";

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
    <ExtraExtraLargeHeading w="2.5ch">
      {formatCurrentSlide(currentSlide)}
    </ExtraExtraLargeHeading>
  );
};

export default SliderCounter;
