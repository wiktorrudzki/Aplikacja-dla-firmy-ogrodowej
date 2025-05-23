import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { galleryImages } from "@data/gallery-images.json";
const Gallery = ({ data }) => {
    const imageData = galleryImages[0];
    const node = data.images.nodes.find((image) => image.relativePath === imageData.src);
    const image = getImage(node?.childImageSharp?.gatsbyImageData);
    return (React.createElement("div", null,
        React.createElement("h1", null, "Gallery"),
        React.createElement(GatsbyImage, { image: image, alt: imageData.alt })));
};
export default Gallery;
export const pageQuery = graphql `
  {
    images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  }
`;
