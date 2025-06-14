import { GraphQLMdxNodes } from "@src/types/graphql";
import { Slide } from "@src/types/slide";
import { graphql, useStaticQuery } from "gatsby";

const useOurValues = () => {
  const data: GraphQLMdxNodes<Slide> = useStaticQuery(graphql`
    {
      data: allMdx(
        filter: { internal: { contentFilePath: { regex: "/our-values/" } } }
        sort: { frontmatter: { id: ASC } }
      ) {
        nodes {
          ...OurValues
        }
      }
    }
  `);

  return data.data.nodes.map((s) => s.frontmatter);
};

export default useOurValues;
