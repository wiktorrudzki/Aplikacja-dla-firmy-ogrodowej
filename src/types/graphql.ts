import { Node } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";

export type GraphQLMdxNodes<T extends {}> = {
  data: {
    nodes: { frontmatter: T }[];
  };
};

export type ImageJsonNode = Node & {
  title?: string;
  altKey?: string;
  relativePath?: string;
  childImageSharp?: { gatsbyImageData: ImageDataLike };
};

export type GalleryJsonNode = Node & {
  categoryNameKey?: string;
  imageTitles?: string[];
  images?: ImageJsonNode[];
};
