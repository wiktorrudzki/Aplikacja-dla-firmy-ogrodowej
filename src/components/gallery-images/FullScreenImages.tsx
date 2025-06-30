import { Dialog, Portal } from "@chakra-ui/react";
import { ImageJsonNode } from "@src/types/graphql";
import { t } from "@src/utils/i18n";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import FullScreenImagesControls from "./FullScreenImagesControls";

type Props = {
  children: React.ReactNode;
  images: ImageJsonNode<"id" | "altKey" | "childImageSharp">[];
  open: boolean;
  startIndex: number;
  onOpenChange: (open: boolean) => void;
};

const FullScreenImages = ({
  children,
  images,
  open,
  startIndex,
  onOpenChange,
}: Props) => {
  return (
    <Dialog.Root
      lazyMount
      size="cover"
      placement="center"
      motionPreset="slide-in-bottom"
      open={open}
      onOpenChange={(e) => onOpenChange(e.open)}
    >
      {children}
      <Portal>
        <Dialog.Positioner
          padding={{ base: 4, md: 8, xl: 12 }}
          background="rgba(0,0,0,0.5)"
        >
          <Dialog.Content
            rounded={24}
            w={{ base: "100%", lg: "90%", xl: "80%", "2xl": "75%" }}
            h={{ base: "50%", sm: "60%", md: "70%", lg: "80%", xl: "90%" }}
          >
            <Swiper
              modules={[Navigation]}
              initialSlide={startIndex}
              style={{ width: "100%", height: "100%", borderRadius: 24 }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
            >
              {images.map((image) => {
                const img = getImage(image.childImageSharp);
                return img ? (
                  <SwiperSlide key={`${image.id}_${t(image.altKey)}`}>
                    <GatsbyImage
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                      image={img}
                      objectFit="cover"
                      alt={t(image.altKey)}
                    />
                  </SwiperSlide>
                ) : null;
              })}
              <FullScreenImagesControls />
            </Swiper>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default FullScreenImages;
