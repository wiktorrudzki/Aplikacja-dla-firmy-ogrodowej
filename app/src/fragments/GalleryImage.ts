import { graphql } from "gatsby";

export const GalleryImage = graphql`
  fragment GalleryImage on ImageJson {
    childImageSharp {
      gatsbyImageData(width: 2000, layout: CONSTRAINED)
    }
  }
`;

export const ServiceImage = graphql`
  fragment ServiceImage on ImageJson {
    childImageSharp {
      gatsbyImageData(width: 400)
    }
  }
`;
