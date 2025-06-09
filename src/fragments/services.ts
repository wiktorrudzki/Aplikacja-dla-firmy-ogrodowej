import { graphql } from "gatsby";

export const serviceFields = graphql`
  fragment ServiceFields on Mdx {
    frontmatter {
      title
      alt
      icon
      featuredImage {
        childImageSharp {
          gatsbyImageData(width: 600, placeholder: BLURRED)
        }
      }
    }
  }
`;
