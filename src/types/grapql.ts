export type GraphQLNodesData<T extends {}> = {
  data: {
    nodes: { frontmatter: T }[];
  };
};
