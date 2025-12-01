import React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { t } from "@i18n";

import { distinctById } from "@src/helpers";
import { GatsbyPageWithLayout } from "@src/types/page";
import { SEO } from "@src/components/seo";
import GalleryWithCategoriesPage from "@src/templates/GalleryWithCategoriesPage";
import {
  ClientType,
  GalleryCategory,
  GalleryJsonNode,
  GraphQLNodes,
  ImageJsonNode,
} from "@src/types/graphql";

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

const IndividualClientGallery: GatsbyPageWithLayout<PageProps<QueryType>> = ({
  data,
}) => {
  const { allGalleryJson } = data;
  const imageJsons = distinctById(
    allGalleryJson.nodes.flatMap((galleryJson) => galleryJson.imageJsons),
  );

  return (
    <GalleryWithCategoriesPage
      currentCategory={GalleryCategory.ALL}
      clientType={ClientType.INDIVIDUAL_CLIENT}
      imageJsonArray={imageJsons}
    />
  );
};

export default IndividualClientGallery;

export const Head: HeadFC = ({ location }) => (
  <SEO title={t("gallery")} path={location.pathname} />
);
