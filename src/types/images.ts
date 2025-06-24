import { IGatsbyImageData } from "gatsby-plugin-image";

export type ImageDetails = {
  data: IGatsbyImageData;
  alt: string;
  style?: React.CSSProperties;
};
