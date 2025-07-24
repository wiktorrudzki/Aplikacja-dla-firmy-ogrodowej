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
import { useInView } from "framer-motion";
import { AnimatedEstimateCard } from "@src/components/estimate-card";

const About: GatsbyPageWithLayout = () => {
  const HeroSliderRef = React.useRef<HTMLElement>(null);
  const isHeroSliderVisible = useInView(HeroSliderRef, {
    initial: true,
    amount: 0.7,
  });

  return (
    <>
      <HeroSlider ref={HeroSliderRef} />
      <AnimatedEstimateCard isVisible={!isHeroSliderVisible} />

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

About.hideEstimateCard = true;

export default About;

export const Head: HeadFC = ({ location }) => (
  <SEO title={t("about-us")} path={location.pathname} />
);
