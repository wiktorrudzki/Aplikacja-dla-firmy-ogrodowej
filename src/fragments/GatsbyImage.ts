import { graphql } from "gatsby";

export const fluidImage = graphql`
  fragment GatsbyImageFragment on File {
    childImageSharp {
      gatsbyImageData(
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
        layout: CONSTRAINED
      )
    }
  }
`;
