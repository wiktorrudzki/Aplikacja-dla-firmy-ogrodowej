import { Box } from "@chakra-ui/react";
import { HeroSlider, WorkEffects } from "@src/components/aboutUs";
import { GatsbyPageWithLayout } from "@src/types/page";

import React from "react";

const About: GatsbyPageWithLayout = () => (
  <Box>
    <HeroSlider />
    <WorkEffects />
  </Box>
);

export default About;
