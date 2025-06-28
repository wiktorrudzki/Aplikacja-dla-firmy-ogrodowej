import { GalleryTabs } from "@src/components/gallery";
import { GalleryImages } from "@src/components/gallery-images";
import { MainCard } from "@src/components/main-card";
import { NavigationMarginContainer } from "@src/components/navigation-margin-container";
import { GalleryJsonNode, ImageJsonNode } from "@src/types/graphql";
import { GatsbyPageWithLayout } from "@src/types/page";
import { graphql, PageProps } from "gatsby";
import React from "react";

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
    <NavigationMarginContainer>
      <MainCard>
        <GalleryTabs currentCategory={galleryJson.category}>
          <GalleryImages imageJsons={galleryJson.imageJsons} />
        </GalleryTabs>
      </MainCard>
    </NavigationMarginContainer>
  );
};

export default GallerySubCategory;
