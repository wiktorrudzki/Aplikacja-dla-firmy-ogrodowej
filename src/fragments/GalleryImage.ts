import { graphql } from "gatsby";

export const GalleryImage = graphql`
  fragment GalleryImage on ImageJson {
    childImageSharp {
      gatsbyImageData(width: 800)
    }
  }
`;
