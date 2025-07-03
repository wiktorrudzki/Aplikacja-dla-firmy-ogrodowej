import { GalleryTabs } from "@src/components/gallery";
import { GalleryImages } from "@src/components/gallery-images";
import { SEO } from "@src/components/seo";
import { GalleryJsonNode, ImageJsonNode } from "@src/types/graphql";
import { GatsbyPageWithLayout } from "@src/types/page";
import { t } from "@i18n";
import { graphql, HeadFC, PageProps } from "gatsby";
import React from "react";
import { MainContainer } from "@src/components/main-container";

type PageQuery = {
  galleryJson: GalleryJsonNode<
    "order" | "category" | "imageJsons",
    ImageJsonNode<"id" | "altKey" | "childImageSharp">
  >;
};

export const pageQuery = graphql`
  query ($id: String) {
    galleryJson(id: { eq: $id }) {
      order
      category
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
    <MainContainer>
      <GalleryTabs currentCategory={galleryJson.category}>
        <GalleryImages imageJsons={galleryJson.imageJsons} />
      </GalleryTabs>
    </MainContainer>
  );
};

export const Head: HeadFC = ({ location }) => (
  <SEO title={t("gallery")} path={location.pathname} />
);

export default GallerySubCategory;
