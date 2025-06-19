import React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { GatsbyPageWithLayout } from "@src/types/page";
import { SEO } from "@src/components/seo";
import { t } from "@i18n";
import {
  GalleryJsonNode,
  GraphQLNodes,
  ImageJsonNode,
} from "@src/types/graphql";
import { distinctById, getImageJsonImage } from "@src/helpers";
import { Heading1 } from "@src/components/typography";

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
  const images = distinctById(
    allGalleryJson.nodes.flatMap((galleryJson) => galleryJson.imageJsons),
  );
  const categories = allGalleryJson.nodes.map((galleryJson) =>
    t(galleryJson.category),
  );

  return (
    <div>
      <Heading1>{[t("ALL"), ...categories].join(", ")}</Heading1>
      {images.map((imageJson) => (
        <GatsbyImage
          key={imageJson.id}
          image={getImageJsonImage(imageJson)}
          alt={imageJson.altKey}
        />
      ))}
    </div>
  );
};

export default Gallery;

export const Head: HeadFC = ({ location }) => (
  <SEO title={t("gallery")} path={location.pathname} />
);
