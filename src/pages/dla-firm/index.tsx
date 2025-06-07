import { DataType, GalleryImage, ImageNode } from "@src/types/images";
import { GatsbyPageWithLayout } from "@src/types/page";
import { graphql, PageProps } from "gatsby";
import React, { useMemo } from "react";
import galleryImages from "@data/gallery-images";
import galleryCategories from "@data/gallery-categories.json";
import { ServiceCards } from "@src/components/service-card";
import { companyServicesCards } from "@data/servicesCards";
import { Service } from "@src/types/services";

const imagesPaths = galleryImages
  .filter((image) => image.category.includes(galleryCategories.DLA_FIRM))
  .map((image) => image.src);

const IndexPage: GatsbyPageWithLayout<PageProps<DataType>> = ({ data }) => {
  const images = useMemo(
    () =>
      data.images.nodes
        .filter(({ relativePath }) => imagesPaths.includes(relativePath))
        .map((image) => ({
          ...image,
          ...galleryImages.find((g) => g.src === image.relativePath),
        })),
    [data],
  );

  return (
    <div
      style={{
        height: "100svh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ServiceCards
        services={images.map((image) => ({
          ...(companyServicesCards.find(
            (c) => c.imageId === image.id,
          ) as Service),
          image: image as GalleryImage & ImageNode,
        }))}
      />
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  {
    images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      nodes {
        relativePath
        ...GatsbyImageFragment
      }
    }
  }
`;
