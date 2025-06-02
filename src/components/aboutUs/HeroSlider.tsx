import * as React from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { t } from "@i18n";
import slides from "@data/ourValuesSlides";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "swiper/css";
import "./HeroSlider.css";

interface SliderButton extends React.PropsWithChildren {
  type: "prev" | "next";
}

const SliderButton = ({ children, type, ...props }: SliderButton) => (
  <IconButton
    aria-label="Search database"
    variant="outline"
    borderWidth={2}
    rounded="full"
    size={["xl", "2xl"]}
    color="white"
    _hover={{ color: "black" }}
    className={`swiper-button about-us-swiper-button-${type}`}
    {...props}
  >
    {children}
  </IconButton>
);

const formatCurrentSlide = (currentSlide: number) => {
  if (currentSlide < 10) return `0${currentSlide}`;
  return currentSlide;
};

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(1);
  return (
    <Grid height="100svh">
      <GridItem gridArea="1/1" overflowX="hidden">
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
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
          // autoplay={{ delay: 5000 }}
          style={{
            height: "100svh",
            width: "100vw",
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Grid height="100%">
                <GridItem gridArea="1/1" position="relative">
                  {slide.imageElement}
                  <Box
                    position="absolute"
                    width="100%"
                    height="100%"
                    top="0"
                    left="0"
                    backgroundColor="blackAlpha.600"
                  />
                </GridItem>
                <GridItem
                  gridArea="1/1"
                  alignSelf="center"
                  position="relative"
                  color="white"
                >
                  <Container>
                    <Flex direction="column" gap={[3, 6]} maxWidth="2xl">
                      <Heading
                        as="h2"
                        textStyle="heading-2"
                        textTransform="uppercase"
                      >
                        {t("our-values")}
                      </Heading>
                      <Heading
                        as="h1"
                        textStyle="extra-extra-large"
                        textTransform="uppercase"
                        fontSize={["4rem"]}
                        wordBreak="break-word"
                      >
                        {slide.title}
                      </Heading>
                      <Text textStyle="paragraph">{slide.description}</Text>
                    </Flex>
                  </Container>
                </GridItem>
              </Grid>
            </SwiperSlide>
          ))}
        </Swiper>
      </GridItem>

      <GridItem
        gridArea="1/1"
        zIndex={1}
        height="fit-content"
        width="100%"
        placeSelf="end"
        color="white"
      >
        <Container>
          <Flex
            alignItems="center"
            justifyContent="flex-end"
            gap={[3, 5]}
            py={5}
          >
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
            <Heading
              as="h2"
              textStyle="extra-extra-large"
              fontSize={["3.5rem", "5rem"]}
              w="2ch"
            >
              {formatCurrentSlide(currentSlide)}
            </Heading>
          </Flex>
        </Container>
      </GridItem>
    </Grid>
  );
};

export default HeroSlider;
