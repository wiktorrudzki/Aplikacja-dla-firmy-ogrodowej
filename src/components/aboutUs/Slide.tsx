import { Box, Flex } from "@chakra-ui/react";
import { Slide as SlideType } from "@src/types/slide";
import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import MiniSlide from "./MiniSlide";
import SlideDetails from "./SlideDetails";
import { useSwiper } from "swiper/react";

type Props = {
  slide: SlideType;
  nextSlides: SlideType[];
};

const Slide = ({ slide, nextSlides }: Props) => {
  const swiper = useSwiper();

  const image = React.useMemo(
    () => getImage(slide.featuredImage),
    [slide.featuredImage],
  );

  return (
    <>
      {image != undefined ? (
        <GatsbyImage
          image={image}
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
            marginRight={6}
          >
            {nextSlides.map((s, i) => (
              <MiniSlide
                key={`next_slide_${s.id}_from_${slide.id}`}
                slide={s}
                zIndex={slide.id * 10 + 2}
                onClick={() => swiper.slideTo(s.id - 1)}
              />
            ))}
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Slide;
