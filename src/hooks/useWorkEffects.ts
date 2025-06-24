import { GalleryJsonNode, GraphQLNodes } from "@src/types/graphql";
import { graphql, useStaticQuery } from "gatsby";

const useWorkEffects = () => {
  const data = useStaticQuery<GraphQLNodes<"allGalleryJson", GalleryJsonNode>>(
    graphql`
      {
        allGalleryJson(sort: { order: ASC }) {
          nodes {
            order
            category
            imageJsons {
              id
              altKey
              ...BigGalleryImage
            }
          }
        }
      }
    `,
  );

  const effects = data.allGalleryJson.nodes;

  return {
    effects,
  };
};

export default useWorkEffects;
