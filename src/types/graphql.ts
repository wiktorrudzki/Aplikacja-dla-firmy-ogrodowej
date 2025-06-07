import { IGatsbyImageData } from "gatsby-plugin-image";

export type ImageFileQueryResult = {
  file: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
};
