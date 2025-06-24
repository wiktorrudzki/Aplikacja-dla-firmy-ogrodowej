import { graphql } from "gatsby";

export const fluidImage = graphql`
  fragment GatsbyImageFragment on File {
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED)
    }
  }
`;
