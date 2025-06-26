import { VStack } from "@chakra-ui/react";
import React from "react";
import { ExtraExtraLargeHeading } from "../typography";
import { t } from "@src/utils/i18n";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { useWorkEffects } from "@src/hooks";
import "swiper/css/effect-fade"; // fade effect doesnt work without this import
import WorkEffectSlide from "./WorkEffectSlide";
import WorkEffectControls from "./WorkEffectControls";

const WorkEffects = () => {
  const effects = useWorkEffects();

  const outerSwiperRef = React.useRef<SwiperRef | null>(null);

  const [activeIndex, setActiveIndex] = React.useState(0);

  const slideTo = (index: number) => {
    setActiveIndex(index);
    outerSwiperRef.current?.swiper.slideTo(index);
  };

  return (
    // todo adjust height to 100svh - navigation height in task 106
    <VStack w="100%" h="90svh" position="relative">
      <Swiper
        ref={outerSwiperRef}
        modules={[EffectFade]}
        style={{
          height: "100%",
          width: "100%",
        }}
        effect="fade"
      >
        {effects.map((effect) => (
          <SwiperSlide key={`${effect.order}_effect`}>
            <Swiper
              modules={[Autoplay, EffectFade]}
              autoplay={{
                delay: 8000,
              }}
              loop={true}
              style={{
                height: "100%",
                width: "100%",
              }}
              effect="fade"
            >
              {effect.imageJsons?.map((image, index) => (
                <SwiperSlide key={`${index}.${t(image.altKey)}`}>
                  <WorkEffectSlide image={image} />
                </SwiperSlide>
              ))}
              <VStack
                position="absolute"
                zIndex={2}
                w="100%"
                top={0}
                left={0}
                height="50%"
                justify="space-evenly"
              >
                <ExtraExtraLargeHeading
                  maxW="90%"
                  color="white"
                  textAlign="center"
                >
                  {t("zobacz efekty naszej pracy")}
                </ExtraExtraLargeHeading>
                <WorkEffectControls
                  controls={effects.map((e) => e.category ?? "")}
                  activeEffect={effects[activeIndex]}
                  onChange={slideTo}
                />
              </VStack>
            </Swiper>
          </SwiperSlide>
        ))}
      </Swiper>
    </VStack>
  );
};

export default WorkEffects;
