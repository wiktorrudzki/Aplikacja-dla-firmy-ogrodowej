import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import { t } from "@i18n";
import { StaticImage } from "gatsby-plugin-image";
import { Flex } from "@chakra-ui/react";
import { Panel, PanelStack } from "@src/components/homePage";
import ROUTES from "@data/routes.json";

const HouseStaticImageElement = (
  <StaticImage
    src="../assets/images/house.jpg"
    alt="skyscraper"
    loading="eager"
    className="panel__bg-image"
  />
);
// TODO: replace this with higher resolution image
const SkyscraperStaticImageElement = (
  <StaticImage
    src="../assets/images/skyscraper.jpg"
    alt="house"
    loading="eager"
    className="panel__bg-image"
  />
);

const IndexPage: React.FC<PageProps> = ({}) => {
  return (
    <Flex
      as="main"
      flexDir={{ base: "column", lg: "row" }}
      height="100vh"
      width="100vw"
    >
      <Panel
        BackgroundStaticImage={HouseStaticImageElement}
        paddingTop={[15, 0]}
      >
        <PanelStack
          title={t("individual-client")}
          to={ROUTES.KLIENT_INDYWIDUALNY}
        >
          {t("individual-client-homepage")}
        </PanelStack>
      </Panel>

      <Panel BackgroundStaticImage={SkyscraperStaticImageElement}>
        <PanelStack title={t("business-client")} to={ROUTES.DLA_FIRM}>
          {t("business-client-homepage")}
        </PanelStack>
      </Panel>
    </Flex>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
