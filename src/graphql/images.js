import { graphql } from "gatsby";
export const fluidImage = graphql `
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid
      }
      original {
        width
      }
    }
  }
`;
export const getAll = graphql `
  query {
    allFile(filter: { extension: { regex: "/(jpg|jpeg|png)/" } }) {
      nodes {
        ...fluidImage
      }
    }
  }
`;
