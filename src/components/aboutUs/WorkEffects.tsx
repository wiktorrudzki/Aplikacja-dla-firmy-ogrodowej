import { VStack } from "@chakra-ui/react";
import React from "react";
import { ExtraLargeHeading } from "../typography";
import { t } from "@src/utils/i18n";
import constants from "@src/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { useWorkEffects } from "@src/hooks";
import "swiper/css/effect-fade"; // fade effect doesnt work without this import
import WorkEffectSlide from "./WorkEffectSlide";
import WorkEffectControls from "./WorkEffectControls";

const WorkEffects = () => {
  const { effects, activeEffect, changeActiveEffect } = useWorkEffects();

  return (
    <VStack
      w="100vw"
      h={`calc(100svh - ${constants.navigationBaseSizeRem}rem)`}
      position="relative"
    >
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
        {activeEffect.imageJsons?.map((image, index) => (
          <SwiperSlide key={`${index}.${t(image.altKey)}`}>
            <WorkEffectSlide image={image} />
          </SwiperSlide>
        ))}
        <VStack
          position="absolute"
          zIndex={1}
          w="100%"
          top={0}
          left={0}
          gap={16}
          py={{ base: 12, lg: 16, xl: 20 }}
        >
          <ExtraLargeHeading
            textTransform="uppercase"
            fontFamily="extra-extra-large"
            color="white"
            letterSpacing={1.2}
            textAlign="center"
          >
            {t("zobacz efekty naszej pracy")}
          </ExtraLargeHeading>
          <WorkEffectControls
            activeEffect={activeEffect}
            effects={effects}
            onChange={changeActiveEffect}
          />
        </VStack>
      </Swiper>
    </VStack>
  );
};

export default WorkEffects;
