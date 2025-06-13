import galleryImages from "@data/gallery-images";
import { ImageDataLike } from "gatsby-plugin-image";

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
