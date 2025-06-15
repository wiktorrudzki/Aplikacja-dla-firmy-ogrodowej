import { Node } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";

export type GraphQLMdxNodes<T extends {}> = {
  data: {
    nodes: { frontmatter: T }[];
  };
};

export type MdxNode<T extends {}> = Node & {
  frontmatter: T;
  body: string;
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
  imageJsons?: ImageJsonNode[];
};

export type ServiceFrontmatter = Node & {
  title?: string;
  imageTitle?: string;
  iconMapKey?: string;
  categories?: string[];
};

export type ServiceNode = Node & {
  id?: string;
  title?: string;
  slug?: string;
  imageTitle?: string;
  imageJson?: ImageJsonNode;
  iconMapKey?: string;
  categories?: string[];
  body?: string;
};
