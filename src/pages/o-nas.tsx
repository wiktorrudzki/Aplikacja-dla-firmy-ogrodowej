import { Box, useToken } from "@chakra-ui/react";
import { HeroSlider, OurCompanyInNumbers } from "@src/components/aboutUs";
import { GatsbyPageWithLayout } from "@src/types/page";
import React from "react";

const About: GatsbyPageWithLayout = () => {
  return (
    <Box>
      <HeroSlider />
      <OurCompanyInNumbers />
    </Box>
  );
};

export default About;
