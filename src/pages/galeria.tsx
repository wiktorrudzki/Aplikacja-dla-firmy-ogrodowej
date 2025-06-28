import React from "react";
import { graphql, HeadFC, Link as GatsbyLink, PageProps } from "gatsby";
import { GatsbyPageWithLayout } from "@src/types/page";
import { SEO } from "@src/components/seo";
import { t } from "@i18n";
import {
  GalleryCategory,
  GalleryJsonNode,
  GraphQLNodes,
  ImageJsonNode,
} from "@src/types/graphql";
import { distinctById } from "@src/helpers";
import { Tabs } from "@chakra-ui/react";
import { MainCard } from "@src/components/main-card";
import { NavigationMarginContainer } from "@src/components/navigation-margin-container";
import { GalleryImages } from "@src/components/gallery-images";
import { useImageGallery } from "@src/hooks";

type QueryType = GraphQLNodes<
  "allGalleryJson",
  GalleryJsonNode<
    "order" | "category" | "imageJsons",
    ImageJsonNode<"id" | "altKey" | "childImageSharp">
  >
>;

export const pageQuery = graphql`
  {
    allGalleryJson(sort: { order: ASC }) {
      nodes {
        order
        category
        imageJsons {
          id
          altKey
          ...GalleryImage
        }
      }
    }
  }
`;

const Gallery: GatsbyPageWithLayout<PageProps<QueryType>> = ({ data }) => {
  const { allGalleryJson } = data;
  const galleryItems = useImageGallery(allGalleryJson.nodes);
  const [currentTabValue, setCurrentTabValue] = React.useState<
    GalleryCategory | undefined
  >();

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    const currentItem = galleryItems.find((item) => item.path === hash);
    if (!currentItem) return;
    setCurrentTabValue(currentItem.categoryKey);
  }, [galleryItems]);

  const TabContents = React.useMemo(
    () =>
      galleryItems.map((item) => (
        <Tabs.Content key={item.categoryKey} value={item.categoryKey}>
          <GalleryImages imageJsons={item.imageJsons} />
        </Tabs.Content>
      )),
    [galleryItems],
  );

  return (
    <NavigationMarginContainer>
      <MainCard>
        <Tabs.Root
          colorPalette="green"
          value={currentTabValue}
          onValueChange={(details) =>
            setCurrentTabValue(details.value as GalleryCategory)
          }
        >
          <Tabs.List
            width="fit"
            placeSelf="center"
            flexWrap="wrap"
            justifyContent="center"
          >
            {galleryItems.map((item) => (
              <Tabs.Trigger
                key={item.categoryKey}
                value={item.categoryKey}
                asChild
              >
                <GatsbyLink to={item.path}>
                  {item.translatedCategory}
                </GatsbyLink>
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {TabContents}
        </Tabs.Root>
      </MainCard>
    </NavigationMarginContainer>
  );
};

export default Gallery;

export const Head: HeadFC = ({ location }) => (
  <SEO title={t("gallery")} path={location.pathname} />
);
