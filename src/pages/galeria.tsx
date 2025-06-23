import React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { GatsbyPageWithLayout } from "@src/types/page";
import { SEO } from "@src/components/seo";
import { t } from "@i18n";
import { GalleryJsonNode, GraphQLNodes } from "@src/types/graphql";
import { distinctById } from "@src/helpers";
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

type GalleryJsonType = Required<
  Pick<GalleryJsonNode, "order" | "category" | "imageJsons">
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
      {images.map((image) => {
        const imageData = getImage(
          image?.childImageSharp?.gatsbyImageData ?? null,
        );
        if (!imageData) return;
        return (
          <GatsbyImage
            key={image.id}
            image={imageData}
            alt={image.altKey ?? ""}
          />
        );
      })}
    </div>
  );
};

export default Gallery;

export const Head: HeadFC = ({ location }) => (
  <SEO title={t("gallery")} path={location.pathname} />
);
