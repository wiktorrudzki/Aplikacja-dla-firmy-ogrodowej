import * as React from "react";
import { HeadFC } from "gatsby";
import { t } from "@i18n";
import { Flex } from "@chakra-ui/react";
import { Panel, PanelStack } from "@src/components/homePage";
import { GatsbyPageWithLayout } from "@src/types/page";
import { SEO } from "@src/components/seo";
import { useOurServices } from "@src/hooks";

const IndexPage: GatsbyPageWithLayout = () => {
  const services = useOurServices("panel__bg-image");

  return (
    <Flex as="main" flexDir={{ base: "column", lg: "row" }} height="100vh">
      {services.map((service) => (
        <Panel
          key={service.title}
          backgroundStaticImage={service.image}
          marginTop={[20, 0]}
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
