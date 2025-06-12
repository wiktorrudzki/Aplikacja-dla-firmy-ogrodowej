export type GraphQLMdxNodes<T extends {}> = {
  data: {
    nodes: { frontmatter: T }[];
  };
};
