import { GraphQLNodes, MdxNode } from "@src/types/graphql";
import { Slide } from "@src/types/slide";
import { graphql, useStaticQuery } from "gatsby";

const useOurValues = () => {
  const data: GraphQLNodes<"allMdx", MdxNode<Slide>> = useStaticQuery(graphql`
    {
      allMdx(
        filter: { internal: { contentFilePath: { regex: "/our-values/" } } }
        sort: { frontmatter: { id: ASC } }
      ) {
        nodes {
          ...OurValues
        }
      }
    }
  `);

  return data.allMdx.nodes.map((s) => s.frontmatter);
};

export default useOurValues;
