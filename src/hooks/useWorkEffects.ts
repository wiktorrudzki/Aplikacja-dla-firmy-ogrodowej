import { GalleryJsonNode, GraphQLNodes, MdxNode } from "@src/types/graphql";
import { graphql, useStaticQuery } from "gatsby";
import { useCallback, useState } from "react";

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

  const [activeEffect, setActiveEffect] = useState(effects[0]);

  const changeActiveEffect = useCallback(
    (effect: GalleryJsonNode) => setActiveEffect(effect),
    [setActiveEffect],
  );

  return { effects, activeEffect, changeActiveEffect };
};

export default useWorkEffects;
