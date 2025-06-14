import { Box, Flex } from "@chakra-ui/react";
import { Slide as SlideType } from "@src/types/slide";
import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import MiniSlide from "./MiniSlide";
import SlideDetails from "./SlideDetails";
import { SwiperRef } from "swiper/react";

type Props = {
  slide: SlideType;
  nextSlides: SlideType[];
  swiper: React.MutableRefObject<SwiperRef | null>;
};

const Slide = ({ slide, nextSlides, swiper }: Props) => (
  <>
    {getImage(slide.featuredImage) != undefined ? (
      <GatsbyImage
        image={getImage(slide.featuredImage)!}
        alt={slide.alt}
        style={{
          position: "fixed",
          height: "100%",
          width: "100%",
          filter: "brightness(0.5)",
          zIndex: slide.id * 10,
        }}
      />
    ) : null}
    <Box color="white" height="100%" placeContent="center">
      <Flex gap={8} justify="space-between" align="center">
        <SlideDetails slide={slide} />
        <Flex
          zIndex={slide.id * 10 + 1}
          gap={6}
          display={{ base: "none", lg: "flex" }}
        >
          {nextSlides.map((s, i) => (
            <MiniSlide
              key={`next_slide_${s.id}_from_${slide.id}`}
              slide={s}
              zIndex={slide.id * 10 + 2}
              onClick={() => swiper?.current?.swiper.slideTo(s.id - 1)}
            />
          ))}
        </Flex>
      </Flex>
    </Box>
  </>
);

export default Slide;
