import galleryImages from "@data/gallery-images";
import { IGatsbyImageData, ImageDataLike } from "gatsby-plugin-image";

export type ImageNode = {
  relativePath: string;
  childImageSharp: {
    gatsbyImageData: ImageDataLike;
  };
};

export type DataType = {
  images: {
    nodes: ImageNode[];
  };
};

export type GalleryImage = (typeof galleryImages)[number];

export type ImageDetails = {
  data: IGatsbyImageData;
  alt: string;
  style?: React.CSSProperties;
};
