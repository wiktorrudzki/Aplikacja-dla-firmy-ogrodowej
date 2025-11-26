import { ROUTES } from "@src/constants";
import {
  GalleryCategory,
  GalleryJsonNode,
  GraphQLNodes,
} from "@src/types/graphql";
import { graphql, useStaticQuery } from "gatsby";

type Query = GraphQLNodes<
  "allGalleryJson",
  GalleryJsonNode<"slug" | "category">
>;

type Category = {
  key: string;
  slug: string;
};

const useGalleryCategories = () => {
  const { allGalleryJson } = useStaticQuery<Query>(graphql`
    {
      allGalleryJson(sort: { order: ASC }) {
        nodes {
          slug
          category
        }
      }
    }
  `);

  const categories: Category[] = [
    { key: GalleryCategory.ALL, slug: ROUTES.GALERIA },
  ];

  allGalleryJson.nodes.forEach((galleryJson) => {
    const category: Category = {
      key: galleryJson.category,
      slug: galleryJson.slug,
    };
    categories.push(category);
  });

  return categories;
};

export default useGalleryCategories;
