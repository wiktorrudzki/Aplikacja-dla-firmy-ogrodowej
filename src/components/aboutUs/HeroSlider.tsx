import * as React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Text,
  useToken,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { t } from "@i18n";
import slides from "@data/ourValuesSlides";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styled from "@emotion/styled";
import "swiper/css";

interface SliderButton extends React.PropsWithChildren {
  type: "prev" | "next";
}

const SliderButton = ({ children, type, ...props }: SliderButton) => (
  <IconButton
    aria-label="Search database"
    variant="outline"
    borderWidth={2}
    rounded="full"
    size="2xl"
    color="white"
    _hover={{ color: "black" }}
    className={`swiper-button about-us-swiper-button-${type}`}
    {...props}
  >
    {children}
  </IconButton>
);

const ProgressBar = styled(Flex)<{ bgColor: string; barColor: string }>`
  background-color: ${({ bgColor }) => bgColor};

  & .about-us-progress-fill {
    width: 100%;
    background-color: ${({ barColor }) => barColor};
    transform-origin: left top;
  }
`;

const HeroSlider = () => {
  const [green, white] = useToken("colors", ["green.500", "white"]);

  return (
    <Grid>
      <GridItem gridArea="1/1">
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
          // autoplay={{ delay: 5000 }}
          loop
          style={{ height: "100vh", width: "100vw" }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Grid height="100vh">
                <GridItem gridArea="1/1">{slide.imageElement}</GridItem>
                <GridItem
                  gridArea="1/1"
                  alignSelf="center"
                  maxWidth="2xl"
                  position="relative"
                  color="white"
                >
                  <Flex direction="column" gap={[6]}>
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
                    >
                      {slide.title}
                    </Heading>
                    <Text textStyle="paragraph">{slide.description}</Text>
                  </Flex>
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
        placeSelf="end"
        color="white"
      >
        <Flex alignItems="center" justifyContent="flex-end" gap={3} p={5}>
          <SliderButton type="prev">
            <MdKeyboardArrowLeft />
          </SliderButton>
          <SliderButton type="next">
            <MdKeyboardArrowRight />
          </SliderButton>
          <ProgressBar
            className="swiper-pagination"
            height={1}
            width="sm"
            bgColor={white}
            barColor={green}
          />
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default HeroSlider;
