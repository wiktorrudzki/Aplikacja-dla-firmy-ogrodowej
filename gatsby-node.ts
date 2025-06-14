import { GatsbyNode, Node } from "gatsby";
import MillionLint from "@million/lint";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { ImageJsonNode } from "@src/types/graphql";

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
    const { createTypes } = actions;
    const typeDefs = `
    type ImageJson implements Node {
      title: String!
      altKey: String!
      relativePath: String!
      childImageSharp: ImageSharp
    }
  `;
    createTypes(typeDefs);
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

  createResolvers({ ImageJson });
};
