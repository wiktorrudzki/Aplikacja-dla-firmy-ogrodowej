import { Box } from "@chakra-ui/react";
import {
  HeroSlider,
  ServiceArea,
  OurCompanyInNumbers,
} from "@src/components/aboutUs";
import { GatsbyPageWithLayout } from "@src/types/page";

import React from "react";

const About: GatsbyPageWithLayout = () => (
  <Box>
    <HeroSlider />
    <OurCompanyInNumbers />
    <ServiceArea />
  </Box>
);

export default About;
