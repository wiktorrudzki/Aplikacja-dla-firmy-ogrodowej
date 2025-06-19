import React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { GatsbyPageWithLayout } from "@src/types/page";
import { SEO } from "@src/components/seo";
import { t } from "@i18n";
import {
  GalleryJsonNode,
  GraphQLNodes,
  ImageJsonNode,
} from "@src/types/graphql";
import { distinctById } from "@src/helpers";
import { Link, Tabs } from "@chakra-ui/react";
import { MainCard } from "@src/components/main-card";
import { NavigationMarginContainer } from "@src/components/navigation-margin-container";
import { GalleryImages } from "@src/components/gallery-images";

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
  const allImages = distinctById(
    allGalleryJson.nodes.flatMap((galleryJson) => galleryJson.imageJsons),
  );
  const categories = allGalleryJson.nodes.map((galleryJson) =>
    t(galleryJson.category),
  );
  categories.unshift(t("ALL"));

  return (
    <NavigationMarginContainer>
      <MainCard>
        <Tabs.Root defaultValue={categories[0]} colorPalette="green">
          <Tabs.List justifyContent="center">
            {categories.map((category) => (
              <Tabs.Trigger key={category} value={category} asChild>
                <Link unstyled href={`#${category.toLowerCase()}`}>
                  {category}
                </Link>
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          <Tabs.Content key={categories[0]} value={categories[0]}>
            <GalleryImages imageJsons={allImages} />
          </Tabs.Content>
        </Tabs.Root>
      </MainCard>
    </NavigationMarginContainer>
  );
};

export default Gallery;

export const Head: HeadFC = ({ location }) => (
  <SEO title={t("gallery")} path={location.pathname} />
);
