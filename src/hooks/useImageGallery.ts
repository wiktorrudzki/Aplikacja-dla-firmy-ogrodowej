import { distinctById } from "@src/helpers";
import {
  ImageJsonNode,
  GalleryJsonNode,
  GalleryCategory,
} from "@src/types/graphql";
import { t } from "@src/utils/i18n";
import React from "react";
import slugify from "slugify";

type ImageJsonType = Required<
  Pick<ImageJsonNode, "id" | "altKey" | "childImageSharp">
>;

type GalleryJsonType = Required<
  Pick<GalleryJsonNode<ImageJsonType>, "order" | "category" | "imageJsons">
>;

const allCategoryKey = "ALL";

const useImageGallery = (allGalleryJsonNodes: GalleryJsonType[]) => {
  const allImages = React.useMemo(
    () =>
      distinctById(
        allGalleryJsonNodes.flatMap((galleryJson) => galleryJson.imageJsons),
      ),
    [allGalleryJsonNodes],
  );

  const categoryKeys = React.useMemo(() => {
    const categories: Array<GalleryCategory | typeof allCategoryKey> =
      allGalleryJsonNodes.map((galleryJson) => galleryJson.category);
    categories.unshift(allCategoryKey);
    return categories;
  }, [allGalleryJsonNodes]);

  const galleryElements = React.useMemo(
    () =>
      categoryKeys.map((categoryKey) => {
        const translatedCategory = t(categoryKey);
        return {
          categoryKey,
          translatedCategory,
          path:
            categoryKey === allCategoryKey
              ? ""
              : `#${slugify(translatedCategory.toLowerCase())}`,
          imageJsons:
            categoryKey === allCategoryKey
              ? allImages
              : (allGalleryJsonNodes.find(
                  (galleryJson) => galleryJson.category === categoryKey,
                )?.imageJsons ?? null),
        };
      }),
    [allGalleryJsonNodes, allImages, categoryKeys],
  );

  return galleryElements;
};

export default useImageGallery;
