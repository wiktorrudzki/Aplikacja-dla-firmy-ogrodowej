import { Box } from "@chakra-ui/react";
import { HeroSlider, ContactUs } from "@src/components/aboutUs";
import { GatsbyPageWithLayout } from "@src/types/page";
import React from "react";

const About: GatsbyPageWithLayout = () => {
  return (
    <Box>
      <HeroSlider />
      <ContactUs as="section" />
    </Box>
  );
};

export default About;
