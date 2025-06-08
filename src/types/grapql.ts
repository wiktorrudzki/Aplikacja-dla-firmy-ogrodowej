export type GraphQL<T extends {}> = {
  data: {
    nodes: { frontmatter: T }[];
  };
};
