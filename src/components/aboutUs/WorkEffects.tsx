import { Box } from "@chakra-ui/react";
import React from "react";
import { Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const WorkEffects = () => {
  return (
    <Box overflowX="hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        pagination={{
          el: ".swiper-pagination",
          type: "progressbar",
          progressbarFillClass: "about-us-progress-fill",
        }}
        autoplay={{ delay: 8000 }}
        style={{ height: "100svh" }}
      >
        {/* {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Slide slide={slide} />
          </SwiperSlide>
        ))} */}
      </Swiper>
    </Box>
  );
};

export default WorkEffects;
