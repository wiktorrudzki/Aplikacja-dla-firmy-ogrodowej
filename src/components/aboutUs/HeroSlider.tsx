import * as React from "react";
import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "./HeroSlider.css";
import SliderControls from "./SliderControls";
import Slide from "./Slide";
import { nextXElementsFromList } from "@src/helpers";
import { useOurValues } from "@src/hooks";

const HeroSlider = () => {
  const slides = useOurValues();

  return (
    <Box overflowX="hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        pagination={{
          el: ".swiper-pagination",
          type: "progressbar",
          progressbarFillClass: "about-us-progress-fill",
        }}
        navigation={{
          nextEl: ".about-us-swiper-button-next",
          prevEl: ".about-us-swiper-button-prev",
        }}
        autoplay={{ delay: 8000 }}
        style={{ height: "100svh" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <Slide
              slide={slide}
              nextSlides={nextXElementsFromList(slides, index, 2)}
            />
          </SwiperSlide>
        ))}
        <SliderControls />
      </Swiper>
    </Box>
  );
};

export default HeroSlider;
