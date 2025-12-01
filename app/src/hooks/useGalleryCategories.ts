import { ROUTES } from "@src/constants";
import {
  ClientType,
  GalleryCategory,
  GalleryJsonNode,
  GraphQLNodes,
} from "@src/types/graphql";
import { graphql, useStaticQuery } from "gatsby";

type Query = GraphQLNodes<
  "allGalleryJson",
  GalleryJsonNode<"slug" | "category" | "clientType">
>;

type Category = {
  key: string;
  slug: string;
};

const useGalleryCategories = (clientType: ClientType) => {
  const { allGalleryJson } = useStaticQuery<Query>(graphql`
    {
      allGalleryJson(sort: { order: ASC }) {
        nodes {
          slug
          category
          clientType
        }
      }
    }
  `);

  const categories: Category[] = [
    { key: GalleryCategory.ALL, slug: ROUTES.GALERIA },
  ];

  allGalleryJson.nodes.forEach((galleryJson) => {
    if (galleryJson.clientType !== clientType) return;

    const category: Category = {
      key: galleryJson.category,
      slug: galleryJson.slug,
    };
    categories.push(category);
  });

  return categories;
};

export default useGalleryCategories;
