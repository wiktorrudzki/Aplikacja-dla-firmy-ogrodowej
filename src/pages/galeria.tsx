import React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { GatsbyPageWithLayout } from "@src/types/page";
import { SEO } from "@src/components/seo";
import { t } from "@i18n";
import {
  GalleryCategory,
  GalleryJsonNode,
  GraphQLNodes,
  ImageJsonNode,
} from "@src/types/graphql";
import { GalleryImages } from "@src/components/gallery-images";
import { GalleryTabs } from "@src/components/gallery";
import { distinctById } from "@src/helpers";
import { MainContainer } from "@src/components/main-container";

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
  const imageJsons = distinctById(
    allGalleryJson.nodes.flatMap((galleryJson) => galleryJson.imageJsons),
  );

  return (
    <MainContainer>
      <GalleryTabs currentCategory={GalleryCategory.ALL}>
        <GalleryImages imageJsons={imageJsons} />
      </GalleryTabs>
    </MainContainer>
  );
};

export default Gallery;

export const Head: HeadFC = ({ location }) => (
  <SEO title={t("gallery")} path={location.pathname} />
);
