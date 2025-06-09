import { graphql } from "gatsby";

export const ourValues = graphql`
  fragment OurValues on Mdx {
    frontmatter {
      id
      title
      alt
      description
      featuredImage {
        childImageSharp {
          gatsbyImageData(width: 3000, placeholder: BLURRED)
        }
      }
    }
  }
`;
