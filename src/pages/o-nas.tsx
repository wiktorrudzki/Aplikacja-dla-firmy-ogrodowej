import { Box } from "@chakra-ui/react";
import { HeroSlider } from "@src/components/aboutUs";
import { GatsbyPageWithLayout } from "@src/types/page";

import React from "react";

const About: GatsbyPageWithLayout = () => (
  <Box>
    <HeroSlider />
  </Box>
);

export default About;
