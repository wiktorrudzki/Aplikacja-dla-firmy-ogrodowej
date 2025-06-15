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
  ({ actions, schema }) => {
    const typeDefs = [
      schema.buildInterfaceType({
        name: "IService",
        fields: {
          id: "ID!",
          title: "String!",
          slug: "String!",
          imageTitle: "String!",
          imageJson: "ImageJson",
          iconMapKey: "String!",
          categories: "[String!]!",
        },
      }),
      schema.buildObjectType({
        name: "ImageJson",
        interfaces: ["Node"],
        fields: {
          title: "String!",
          altKey: "String!",
          relativePath: "String!",
          childImageSharp: {
            type: "ImageSharp!",
            resolve: async (source: ImageJsonNode, _args, context) => {
              const fileNode = await context.nodeModel.findOne({
                type: "File",
                query: {
                  filter: { relativePath: { eq: source.relativePath } },
                },
              });
              if (!fileNode || !fileNode.children?.length) return null;
              return await context.nodeModel.getNodeById({
                id: fileNode.children[0],
                type: "ImageSharp",
              });
            },
          },
        },
      }),
      schema.buildObjectType({
        name: "GalleryJson",
        interfaces: ["Node"],
        fields: {
          categoryNameKey: "String!",
          imageTitles: "[String!]!",
          imageJsons: {
            type: "[ImageJson!]!",
            resolve: async (source: GalleryJsonNode, _args, context) => {
              const { entries } = await context.nodeModel.findAll({
                type: "ImageJson",
                query: {
                  filter: { title: { in: source.imageTitles } },
                },
              });
              return entries;
            },
          },
        },
      }),
      schema.buildObjectType({
        name: "Service",
        interfaces: ["IService", "Node"],
        fields: {
          id: "ID!",
          title: "String!",
          slug: "String!",
          imageTitle: "String!",
          imageJson: {
            type: "ImageJson!",
            resolve: async (source: ServiceNode, _args, context) =>
              await context.nodeModel.findOne({
                type: "ImageJson",
                query: {
                  filter: { title: { eq: source.imageTitle } },
                },
              }),
          },
          iconMapKey: "String!",
          categories: "[String!]!",
        },
      }),
    ];
    actions.createTypes(typeDefs);
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
