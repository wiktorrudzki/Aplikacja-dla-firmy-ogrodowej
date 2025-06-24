import * as React from "react";
import { HeadFC } from "gatsby";
import { t } from "@i18n";
import { StaticImage } from "gatsby-plugin-image";
import { Flex } from "@chakra-ui/react";
import { Panel, PanelStack } from "@src/components/homePage";
import { GatsbyPageWithLayout } from "@src/types/page";
import { ROUTES } from "@src/constants";
import { SEO } from "@src/components/seo";

const HouseStaticImageElement = (
  <StaticImage
    src="../assets/images/house.jpg"
    alt="skyscraper"
    loading="eager"
    className="panel__bg-image"
  />
);

const SkyscraperStaticImageElement = (
  <StaticImage
    src="../assets/images/skyscraper.jpg"
    alt="house"
    loading="eager"
    className="panel__bg-image"
  />
);

const IndexPage: GatsbyPageWithLayout = () => {
  return (
    <Flex as="main" flexDir={{ base: "column", lg: "row" }} height="100vh">
      <Panel
        backgroundStaticImage={HouseStaticImageElement}
        marginTop={[20, 0]}
      >
        <PanelStack
          title={t("individual-client")}
          to={ROUTES.KLIENT_INDYWIDUALNY}
        >
          {t("individual-client-homepage")}
        </PanelStack>
      </Panel>

      <Panel backgroundStaticImage={SkyscraperStaticImageElement}>
        <PanelStack title={t("business-client")} to={ROUTES.DLA_FIRM}>
          {t("business-client-homepage")}
        </PanelStack>
      </Panel>
    </Flex>
  );
};

IndexPage.hideFooter = true;

export default IndexPage;

export const Head: HeadFC = ({ location }) => (
  <SEO title={t("homepage")} path={location.pathname} />
);
