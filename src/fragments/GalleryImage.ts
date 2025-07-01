import { graphql } from "gatsby";

export const GalleryImage = graphql`
  fragment GalleryImage on ImageJson {
    childImageSharp {
      gatsbyImageData(width: 1920)
    }
  }
`;

export const BigGalleryImage = graphql`
  fragment BigGalleryImage on ImageJson {
    childImageSharp {
      gatsbyImageData(width: 3000)
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
