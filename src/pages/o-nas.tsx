import {
  HeroSlider,
  WorkEffects,
  ServiceArea,
  OurCompanyInNumbers,
  ContactUs,
  OurServices,
} from "@src/components/aboutUs";
import { SEO } from "@src/components/seo";
import { GatsbyPageWithLayout } from "@src/types/page";
import { t } from "@i18n";
import { HeadFC } from "gatsby";
import React from "react";
import { AnimateBlock } from "@src/components/animations";

const About: GatsbyPageWithLayout = () => {
  return (
    <>
      <HeroSlider />

      <AnimateBlock>
        <OurServices />
      </AnimateBlock>

      <OurCompanyInNumbers />

      <AnimateBlock>
        <ServiceArea />
      </AnimateBlock>

      <WorkEffects />

      <AnimateBlock>
        <ContactUs />
      </AnimateBlock>
    </>
  );
};

export default About;

export const Head: HeadFC = ({ location }) => (
  <SEO title={t("about-us")} path={location.pathname} />
);
