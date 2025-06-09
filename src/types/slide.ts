import { ImageDataLike } from "gatsby-plugin-image";

export type Slide = {
  id: number;
  title: string;
  description: string;
  featuredImage: ImageDataLike;
  alt: string;
};
