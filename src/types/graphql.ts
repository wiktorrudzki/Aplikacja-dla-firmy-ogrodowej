import { Node } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";

export type PickRequired<T, K extends keyof T> = Required<Pick<T, K>> &
  Omit<T, K>;

export type GraphQLNodes<P extends string, T extends {}> = {
  [K in P]: {
    nodes: T[];
  };
};

export type MdxNode<T> = Node & {
  frontmatter: T;
  body: string;
};

type ImageJson = {
  title?: string;
  altKey?: string;
  relativePath?: string;
  childImageSharp?: { gatsbyImageData: ImageDataLike };
};

export type ImageJsonNode<K extends keyof (Node & ImageJson)> = PickRequired<
  Node & ImageJson,
  K
>;

type GalleryJson<T = ImageJson> = {
  order?: number;
  category?: GalleryCategory;
  imageTitles?: string[];
  imageJsons?: T[];
};

export type GalleryJsonNode<
  K extends keyof (Node & GalleryJson),
  T = ImageJson,
> = PickRequired<Node & GalleryJson<T>, K>;

export enum GalleryCategory {
  OUR_WORK = "OUR_WORK",
  LAWNS = "LAWNS",
  TERRACES = "TERRACES",
  VEGETATION = "VEGETATION",
}

type BaseServiceFrontmatter = {
  title?: string;
  imageTitle?: string;
  iconMapKey?: string;
  categories?: string[];
};

export type ServiceFrontmatter<K extends keyof BaseServiceFrontmatter> =
  PickRequired<BaseServiceFrontmatter, K>;

type Service<T = ImageJson> = {
  id?: string;
  title?: string;
  slug?: string;
  imageTitle?: string;
  imageJson?: T;
  iconMapKey?: string;
  categories?: ServiceCategory[];
  body?: string;
};

export type ServiceNode<
  K extends keyof (Node & Service),
  T = ImageJson,
> = PickRequired<Node & Service<T>, K>;

export enum ServiceCategory {
  INDIVIDUAL_CLIENT = "INDIVIDUAL_CLIENT",
  BUSINESS_CLIENT = "BUSINESS_CLIENT",
}
