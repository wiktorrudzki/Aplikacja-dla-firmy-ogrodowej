import { Container, Grid, VStack } from "@chakra-ui/react";
import React from "react";
import { Heading1 } from "../typography";
import { t } from "@src/utils/i18n";
import { useOurServices } from "@src/hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import OurServiceImage from "./OurServiceImage";
import OurServiceContent from "./OurServiceContent";
import "./OurServicesSlide.css";

const isEven = (index: number) => index % 2 === 0;

const OurServices = () => {
  const services = useOurServices("our-services-image");

  return (
    <Container py={{ base: 8, lg: 16, "2xl": 24 }}>
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
          spaceBetween={64}
        >
          {services.map((service, index) => (
            <SwiperSlide key={service.title} style={{ height: "100%" }}>
              <Grid
                templateColumns={{ base: "initial", md: "repeat(2, 1fr)" }}
                templateRows={{ base: "repeat(2, 1fr)", md: "initial" }}
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
    </Container>
  );
};

export default OurServices;
