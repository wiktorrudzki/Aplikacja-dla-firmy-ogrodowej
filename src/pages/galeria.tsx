import React from "react";
import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import { galleryImages } from "@data/gallery-images.json";
import { GatsbyPageWithLayout } from "@src/types/page";

type ImageNode = {
  relativePath: string;
  childImageSharp: {
    gatsbyImageData: ImageDataLike;
  };
};

interface DataType {
  images: {
    nodes: ImageNode[];
  };
}

const Gallery: GatsbyPageWithLayout<PageProps<DataType>> = ({ data }) => {
  const imageData = galleryImages[0];
  const node = data.images.nodes.find(
    (image) => image.relativePath === imageData.src,
  );
  const image = getImage(node?.childImageSharp?.gatsbyImageData!);

  return (
    <div>
      <h1>Gallery</h1>
      <GatsbyImage image={image!} alt={imageData.alt} />
    </div>
  );
};

export default Gallery;

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
