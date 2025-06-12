import { ImageDataLike } from "gatsby-plugin-image";

export type Service = {
  title: string;
  icon: string;
  featuredImage: ImageDataLike;
  alt: string;
};
