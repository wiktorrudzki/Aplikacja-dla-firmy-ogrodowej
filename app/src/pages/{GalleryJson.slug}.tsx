import React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { t } from "@i18n";

import { SEO } from "@src/components/seo";
import { GalleryJsonNode, ImageJsonNode } from "@src/types/graphql";
import { GatsbyPageWithLayout } from "@src/types/page";
import GalleryWithCategoriesPage from "@src/templates/GalleryWithCategoriesPage";

type PageQuery = {
  galleryJson: GalleryJsonNode<
    "order" | "category" | "imageJsons" | "clientType",
    ImageJsonNode<"id" | "altKey" | "childImageSharp">
  >;
};

export const pageQuery = graphql`
  query ($id: String) {
    galleryJson(id: { eq: $id }) {
      order
      category
      clientType
      imageJsons {
        id
        altKey
        ...GalleryImage
      }
    }
  }
`;

const GallerySubCategory: GatsbyPageWithLayout<PageProps<PageQuery>> = ({
  data,
}) => {
  const { galleryJson } = data;

  return (
    <GalleryWithCategoriesPage
      currentCategory={galleryJson.category}
      clientType={galleryJson.clientType}
      imageJsonArray={galleryJson.imageJsons}
    />
  );
};

export const Head: HeadFC = ({ location }) => (
  <SEO title={t("gallery")} path={location.pathname} />
);

export default GallerySubCategory;
