import React from "react";

import { GalleryTabs } from "@src/components/gallery";
import { GalleryImages } from "@src/components/gallery-images";
import { MainContainer } from "@src/components/main-container";
import { ClientType, GalleryCategory, ImageJsonNode } from "@src/types/graphql";

type Props = {
  currentCategory: GalleryCategory;
  clientType: ClientType;
  imageJsonArray: Array<ImageJsonNode<"id" | "altKey" | "childImageSharp">>;
};

const GalleryWithCategoriesPage = ({
  currentCategory,
  imageJsonArray,
  clientType,
}: Props) => (
  <MainContainer>
    <GalleryTabs currentCategory={currentCategory} clientType={clientType}>
      <GalleryImages imageJsons={imageJsonArray} />
    </GalleryTabs>
  </MainContainer>
);
export default GalleryWithCategoriesPage;
