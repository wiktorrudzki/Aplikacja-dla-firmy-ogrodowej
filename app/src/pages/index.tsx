import * as React from "react";
import { HeadFC } from "gatsby";
import { t } from "@i18n";
import { Flex } from "@chakra-ui/react";
import { Panel, PanelStack } from "@src/components/homePage";
import { GatsbyPageWithLayout } from "@src/types/page";
import { SEO } from "@src/components/seo";
import { useOurServices, useResponsiveValues } from "@src/hooks";
import { formatToRem } from "@src/helpers";

const IndexPage: GatsbyPageWithLayout = () => {
  const services = useOurServices("panel__bg-image");

  const { isMobile, navigationHeightRem } = useResponsiveValues();

  return (
    <Flex as="main" flexDir={{ base: "column", lg: "row" }} height="100svh">
      {services.map((service, index) => (
        <Panel
          marginTop={
            isMobile && index === 0
              ? formatToRem(navigationHeightRem)
              : undefined
          }
          key={service.title}
          backgroundStaticImage={service.image}
        >
          <PanelStack title={service.title} to={service.route}>
            {service.homeDescription}
          </PanelStack>
        </Panel>
      ))}
    </Flex>
  );
};

IndexPage.hideFooter = true;
IndexPage.hideEstimateCard = true;

export default IndexPage;

export const Head: HeadFC = ({ location }) => (
  <SEO title={t("homepage")} path={location.pathname} />
);
