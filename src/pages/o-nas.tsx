import { Box } from "@chakra-ui/react";
import {
  HeroSlider,
  ServiceArea,
  OurCompanyInNumbers,
  ContactUs,
} from "@src/components/aboutUs";
import { GatsbyPageWithLayout } from "@src/types/page";
import { t } from "@i18n";
import { HeadFC } from "gatsby";
import React from "react";
import { SEO } from "@src/components/seo";

const About: GatsbyPageWithLayout = () => {
  return (
    <Box>
      <HeroSlider />
      <OurCompanyInNumbers />
      <ServiceArea />
      <ContactUs as="section" />
    </Box>
  );
};

export default About;

export const Head: HeadFC = ({ location }) => (
  <SEO title={t("about-us")} path={location.pathname} />
);
