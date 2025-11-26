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
            ...GalleryImage
          }
        }
      }
    }
  `);

  return data.allGalleryJson.nodes.map((node) => ({
    order: node.order,
    category: node.category,
    image: node.imageJsons.length > 0 ? node.imageJsons[0] : undefined,
  }));
};

export default useWorkEffects;
