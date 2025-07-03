import {
  GalleryJsonNode,
  GraphQLNodes,
  ImageJsonNode,
} from "@src/types/graphql";
import { graphql, useStaticQuery } from "gatsby";

const useWorkEffects = () => {
  const data = useStaticQuery<
    GraphQLNodes<
      "allGalleryJson",
      GalleryJsonNode<
        "order" | "category" | "imageJsons",
        ImageJsonNode<"id" | "altKey" | "childImageSharp">
      >
    >
  >(graphql`
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
  `);

  return data.allGalleryJson.nodes;
};

export default useWorkEffects;
