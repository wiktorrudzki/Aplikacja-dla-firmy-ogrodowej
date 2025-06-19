import React from "react";
import { graphql, HeadFC, Link as GatsbyLink, PageProps } from "gatsby";
import { GatsbyPageWithLayout } from "@src/types/page";
import { SEO } from "@src/components/seo";
import { t } from "@i18n";
import {
  GalleryJsonNode,
  GraphQLNodes,
  ImageJsonNode,
} from "@src/types/graphql";
import { Tabs } from "@chakra-ui/react";
import { MainCard } from "@src/components/main-card";
import { NavigationMarginContainer } from "@src/components/navigation-margin-container";
import { GalleryImages } from "@src/components/gallery-images";
import { useImageGallery } from "@src/hooks";

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

type ImageJsonType = Required<
  Pick<ImageJsonNode, "id" | "altKey" | "childImageSharp">
>;

type GalleryJsonType = Required<
  Pick<GalleryJsonNode<ImageJsonType>, "order" | "category" | "imageJsons">
>;

const Gallery: GatsbyPageWithLayout<
  PageProps<GraphQLNodes<"allGalleryJson", GalleryJsonType>>
> = ({ data: { allGalleryJson } }) => {
  const galleryItems = useImageGallery(allGalleryJson.nodes);

  return (
    <NavigationMarginContainer>
      <MainCard>
        <Tabs.Root
          defaultValue={galleryItems[0].categoryKey}
          colorPalette="green"
        >
          <Tabs.List justifyContent="center">
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
          {galleryItems.map((item) => (
            <Tabs.Content key={item.categoryKey} value={item.categoryKey}>
              <GalleryImages imageJsons={item.imageJsons} />
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </MainCard>
    </NavigationMarginContainer>
  );
};

export default Gallery;

export const Head: HeadFC = ({ location }) => (
  <SEO title={t("gallery")} path={location.pathname} />
);
