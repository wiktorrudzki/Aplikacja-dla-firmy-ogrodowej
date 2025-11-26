import { Tabs } from "@chakra-ui/react";
import useGalleryCategories from "@src/hooks/useGalleryCategories";
import { GalleryCategory } from "@src/types/graphql";
import { t } from "@src/utils/i18n";
import { Link as GatsbyLink } from "gatsby";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  currentCategory: GalleryCategory;
};

const GalleryTabs = ({ currentCategory, children }: Props) => {
  const categories = useGalleryCategories();
  return (
    <Tabs.Root
      colorPalette="primary"
      value={currentCategory}
      placeItems="center"
      display="grid"
    >
      <Tabs.List width="fit" flexWrap="wrap" justifyContent="center">
        {categories.map((category) => (
          <Tabs.Trigger key={category.key} value={category.key} asChild>
            <GatsbyLink to={category.slug}>{t(category.key)}</GatsbyLink>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      <Tabs.Content value={currentCategory}>{children}</Tabs.Content>
    </Tabs.Root>
  );
};

export default GalleryTabs;
