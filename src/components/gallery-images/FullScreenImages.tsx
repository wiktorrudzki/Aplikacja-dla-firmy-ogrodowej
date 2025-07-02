import { Container, Dialog, Portal } from "@chakra-ui/react";
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
      size="full"
      placement="center"
      motionPreset="slide-in-bottom"
      open={open}
      onOpenChange={(e) => onOpenChange(e.open)}
    >
      {children}
      <Portal>
        <Dialog.Positioner background="rgba(0,0,0,0.5)">
          <Container>
            <Dialog.Content
              backgroundColor="transparent"
              style={{ boxShadow: "none" }}
              placeContent="center"
            >
              <Swiper
                modules={[Navigation]}
                initialSlide={startIndex}
                autoHeight={true}
                slidesPerView="auto"
                centeredSlides={true}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
              >
                {images.map((image) => {
                  const img = getImage(image.childImageSharp);
                  return img ? (
                    <SwiperSlide
                      key={`${image.id}_${t(image.altKey)}`}
                      style={{ height: "90svh" }}
                    >
                      <GatsbyImage
                        image={img}
                        alt={t(image.altKey)}
                        style={{ position: "static" }}
                        objectFit="scale-down"
                      />
                    </SwiperSlide>
                  ) : null;
                })}
                <FullScreenImagesControls />
              </Swiper>
            </Dialog.Content>
          </Container>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default FullScreenImages;
