import { GatsbyNode } from "gatsby";
import MillionLint from "@million/lint";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { createFilePath } from "gatsby-source-filesystem";
import {
  GalleryJsonNode,
  ImageJsonNode,
  ServiceNode,
  MdxNode,
  ServiceFrontmatter,
  ServiceCategory,
  GraphQLNodes,
} from "@src/types/graphql";
import path from "path";

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
      schema.buildEnumType({
        name: "ServiceCategory",
        values: {
          INDIVIDUAL_CLIENT: { value: "INDIVIDUAL_CLIENT" },
          BUSINESS_CLIENT: { value: "BUSINESS_CLIENT" },
        },
      }),
      schema.buildInterfaceType({
        name: "IService",
        fields: {
          id: "ID!",
          title: "String!",
          slug: "String!",
          imageTitle: "String!",
          imageJson: "ImageJson",
          iconMapKey: "String!",
          categories: "[ServiceCategory!]!",
        },
      }),
      schema.buildObjectType({
        name: "Service",
        interfaces: ["IService", "Node"],
        directives: [{ name: "@dontInfer" }],
        fields: {
          id: "ID!",
          title: "String!",
          slug: "String!",
          imageTitle: "String!",
          imageJson: {
            type: "ImageJson!",
            resolve: async (source, _args, context) =>
              await context.nodeModel.findOne({
                type: "ImageJson",
                query: {
                  filter: { title: { eq: source.imageTitle } },
                },
              }),
          },
          iconMapKey: "String!",
          categories: "[ServiceCategory!]!",
        },
      }),
      schema.buildObjectType({
        name: "ImageJson",
        interfaces: ["Node"],
        directives: [{ name: "@dontInfer" }],
        fields: {
          title: "String!",
          altKey: "String!",
          relativePath: "String!",
          childImageSharp: {
            type: "ImageSharp!",
            resolve: async (source, _args, context) => {
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
        directives: [{ name: "@dontInfer" }],
        interfaces: ["Node"],
        fields: {
          order: "Int!",
          category: "GalleryCategory!",
          imageTitles: "[String!]!",
          imageJsons: {
            type: "[ImageJson!]!",
            resolve: async (source, _args, context) => {
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
      schema.buildEnumType({
        name: "GalleryCategory",
        values: {
          OUR_WORK: { value: "OUR_WORK" },
          LAWNS: { value: "LAWNS" },
          TERRACES: { value: "TERRACES" },
          VEGETATION: { value: "VEGETATION" },
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

  const serviceMdx = node as MdxNode<
    ServiceFrontmatter<"title" | "imageTitle" | "iconMapKey" | "categories">
  >;

  const serviceNode = {
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

type ServicesQuery = GraphQLNodes<"allService", ServiceNode<"categories">>;

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const templateComponent = path.resolve(`./src/templates/Service.tsx`);
  const result = await graphql<ServicesQuery>(`
    {
      allService {
        nodes {
          id
          slug
          categories
          body
          iconMapKey
          imageJson {
            altKey
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  result.data?.allService.nodes.forEach((node) => {
    node.categories.forEach((category) =>
      actions.createPage({
        path: `${category}${node.slug}`,
        component: templateComponent,
        context: node,
      }),
    );
  });
};
