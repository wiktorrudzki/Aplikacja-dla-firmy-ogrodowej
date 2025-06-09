import * as React from "react";
import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "./HeroSlider.css";
import SliderControls from "./SliderControls";
import Slide from "./Slide";
import { Slide as SlideType } from "@src/types/slide";

type Props = {
  slides: SlideType[];
};

const HeroSlider = ({ slides }: Props) => (
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
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Slide slide={slide} />
        </SwiperSlide>
      ))}
      <SliderControls />
    </Swiper>
  </Box>
);

export default HeroSlider;
