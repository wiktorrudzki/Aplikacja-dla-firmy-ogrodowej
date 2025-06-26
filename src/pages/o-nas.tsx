import { Box } from "@chakra-ui/react";
import {
  HeroSlider,
  WorkEffects,
  ServiceArea,
  OurCompanyInNumbers,
  ContactUs,
} from "@src/components/aboutUs";
import { SEO } from "@src/components/seo";

import { GatsbyPageWithLayout } from "@src/types/page";
import { t } from "@i18n";
import { HeadFC } from "gatsby";
import React from "react";

const About: GatsbyPageWithLayout = () => {
  return (
    <Box>
      <HeroSlider />
      <OurCompanyInNumbers />
      <ServiceArea />
      <WorkEffects />
      <ContactUs as="section" />
    </Box>
  );
};

export default About;

export const Head: HeadFC = ({ location }) => (
  <SEO title={t("about-us")} path={location.pathname} />
);
