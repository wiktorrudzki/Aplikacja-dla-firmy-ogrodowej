import { GatsbyNode, Node } from "gatsby";
import MillionLint from "@million/lint";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { createFilePath } from "gatsby-source-filesystem";
import {
  GalleryJsonNode,
  ImageJsonNode,
  ServiceNode,
  MdxNode,
  ServiceFrontmatter,
} from "@src/types/graphql";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  stage,
  actions,
}) => {
  const plugins = [MillionLint.webpack()];

  if (stage === "build-javascript")
    plugins.push(new BundleAnalyzerPlugin({ analyzerMode: "static" }));

  actions.setWebpackConfig({
    plugins,
  });
};

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions }) => {
    actions.createTypes(`
    type ImageJson implements Node {
      title: String!
      altKey: String!
      relativePath: String!
      childImageSharp: ImageSharp
    }
    type GalleryJson implements Node {
      categoryNameKey: String!
      imageTitles: [String!]!
      imageJsons: [ImageJson!]!
    }
    interface IService @nodeInterface {
      id: ID!
      title: String!
      slug: String!
      imageTitle: String!
      imageJson: ImageJson
      iconMapKey: String!
      categories: [String!]!
    }
    type Service implements IService & Node @dontInfer {
      id: ID!
      title: String!
      slug: String!
      imageTitle: String!
      imageJson: ImageJson
      iconMapKey: String!
      categories: [String!]!
    }
  `);
  };

const createNodeMap = <T extends Node>(
  nodes: T[],
  key: keyof T,
): Map<string, T> => {
  const map = new Map<string, T>();
  nodes.forEach((node) => {
    const keyValue = node[key] as string;
    if (keyValue) map.set(keyValue, node);
  });
  return map;
};

export const createResolvers: GatsbyNode["createResolvers"] = ({
  createResolvers,
  getNodesByType,
  getNode,
}) => {
  const images = getNodesByType("File").filter(
    (node) => node.sourceInstanceName === "images",
  );
  const imageMap = createNodeMap(images, "relativePath");
  const ImageJson = {
    childImageSharp: {
      type: "ImageSharp",
      resolve: (source: ImageJsonNode) =>
        imageMap
          .get(source.relativePath!)
          ?.children.map(getNode)
          .find((child) => child?.internal?.type === "ImageSharp"),
    },
  };

  const imageJsonNodes = getNodesByType("ImageJson");
  const imageJsonMap = createNodeMap(imageJsonNodes, "title");
  const GalleryJson = {
    imageJsons: {
      type: ["ImageJson"],
      resolve: (source: GalleryJsonNode) =>
        source.imageTitles?.map((title) => imageJsonMap.get(title)),
    },
  };

  const Service = {
    imageJson: {
      type: "ImageJson",
      resolve: (source: ServiceNode) => imageJsonMap.get(source.imageTitle!),
    },
  };

  createResolvers({ ImageJson, GalleryJson, Service });
};

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  getNode,
  actions,
  createNodeId,
}) => {
  if (
    node.internal.type !== `Mdx` ||
    !node.internal.contentFilePath?.match("/services/")
  )
    return;

  const serviceMdx = node as MdxNode<ServiceFrontmatter>;

  const serviceNode: ServiceNode = {
    id: createNodeId(`Service-${node.id}`),
    title: serviceMdx.frontmatter.title,
    slug: createFilePath({ node, getNode, basePath: "services" }),
    imageTitle: serviceMdx.frontmatter.imageTitle,
    iconMapKey: serviceMdx.frontmatter.iconMapKey,
    categories: serviceMdx.frontmatter.categories,
    body: serviceMdx.body,
    parent: node.id,
    children: [],
    internal: {
      type: "Service",
      contentDigest: node.internal.contentDigest,
      owner: "",
    },
  };
  actions.createNode(serviceNode);
};
