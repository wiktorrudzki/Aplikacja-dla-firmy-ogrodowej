import { Node } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";

export type GraphQLNodes<P extends string, T extends {}> = {
  [K in P]: {
    nodes: T[];
  };
};

export type MdxNode<T> = Node & {
  frontmatter: T;
  body: string;
};

export type ImageJsonNode = Partial<Node> & {
  title?: string;
  altKey?: string;
  relativePath?: string;
  childImageSharp?: { gatsbyImageData: ImageDataLike };
};

export type GalleryJsonNode<T = ImageJsonNode> = Node & {
  order?: number;
  category?: GalleryCategory;
  imageTitles?: string[];
  imageJsons?: T[];
};

export enum GalleryCategory {
  ALL = "ALL",
  OUR_WORK = "OUR_WORK",
  LAWNS = "LAWNS",
  TERRACES = "TERRACES",
  VEGETATION = "VEGETATION",
}

export type ServiceFrontmatter = Node & {
  title?: string;
  imageTitle?: string;
  iconMapKey?: string;
  categories?: string[];
};

export type ServiceNode<T = ImageJsonNode> = Node & {
  id?: string;
  title?: string;
  slug?: string;
  imageTitle?: string;
  imageJson?: T;
  iconMapKey?: string;
  categories?: ServiceCategory[];
  body?: string;
};

export enum ServiceCategory {
  INDIVIDUAL_CLIENT = "INDIVIDUAL_CLIENT",
  BUSINESS_CLIENT = "BUSINESS_CLIENT",
}
