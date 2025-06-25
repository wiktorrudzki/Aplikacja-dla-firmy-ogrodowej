import { Grid, VStack } from "@chakra-ui/react";
import React from "react";
import { Heading1 } from "../typography";
import { t } from "@src/utils/i18n";
import { useOurServices } from "@src/hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import OurServiceImage from "./OurServiceImage";
import OurServiceContent from "./OurServiceContent";
import "swiper/css/pagination";
import "./OurServicesSlide.css";

const isEven = (index: number) => index % 2 === 0;

const OurServices = () => {
  const services = useOurServices("our-services-image");

  return (
    <VStack gap={{ base: 8, md: 12, xl: 16 }}>
      <Heading1 textAlign="center" textTransform="uppercase">
        {t("do kogo jest skierowana nasza oferta?")}
      </Heading1>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{
          type: "bullets",
          clickable: true,
        }}
        className="our-services-swiper"
      >
        {services.map((service, index) => (
          <SwiperSlide key={service.title} style={{ height: "100%" }}>
            <Grid
              templateColumns={{ base: "1fr", md: "1fr 1fr" }}
              gap={{ base: 4, md: 8, lg: 16 }}
              alignItems="stretch"
            >
              {isEven(index) ? (
                <>
                  <OurServiceImage>{service.image}</OurServiceImage>
                  <OurServiceContent service={service} />
                </>
              ) : (
                <>
                  <OurServiceContent service={service} />
                  <OurServiceImage>{service.image}</OurServiceImage>
                </>
              )}
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>
    </VStack>
  );
};

export default OurServices;
