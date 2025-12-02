import React from "react";

import { GalleryImages } from "@src/components/gallery-images";
import { MainContainer } from "@src/components/main-container";
import { ImageJsonNode } from "@src/types/graphql";

type Props = {
  imageJsonArray: Array<ImageJsonNode<"id" | "altKey" | "childImageSharp">>;
};

const GalleryPage = ({ imageJsonArray }: Props) => (
  <MainContainer>
    <GalleryImages imageJsons={imageJsonArray} />
  </MainContainer>
);
export default GalleryPage;
