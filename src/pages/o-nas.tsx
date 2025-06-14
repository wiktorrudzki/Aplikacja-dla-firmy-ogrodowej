import { Box } from "@chakra-ui/react";
import { HeroSlider, ServiceArea } from "@src/components/aboutUs";
import { GatsbyPageWithLayout } from "@src/types/page";

import React from "react";

const About: GatsbyPageWithLayout = () => (
  <Box>
    <HeroSlider />
    <ServiceArea />
  </Box>
);

export default About;
