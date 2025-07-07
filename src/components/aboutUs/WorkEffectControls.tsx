import { Box, useToken, Wrap } from "@chakra-ui/react";
import React from "react";
import CategoryButton from "./CategoryButton";
import { MdCircle } from "react-icons/md";
import { t } from "@src/utils/i18n";
import { GalleryJsonNode } from "@src/types/graphql";
import { ROUTES } from "@src/constants";
import { useGalleryCategories } from "@src/hooks";

type Props = {
  controls: string[];
  activeEffect: GalleryJsonNode<"category">;
  onChange: (index: number) => void;
};

const WorkEffectControls = ({ controls, activeEffect, onChange }: Props) => {
  const [blackAlpha] = useToken("colors", ["blackAlpha.700"]);
  const galleryCategories = useGalleryCategories();

  return (
    <Wrap
      opacity="0.9"
      gap={8}
      bg="white"
      rounded={32}
      padding={4}
      justify="center"
      maxW="90%"
    >
      {controls.map((control, index) => (
        <Wrap
          alignItems="center"
          justify="center"
          key={`${control}-${index}`}
          gap={8}
        >
          <CategoryButton
            to={
              (galleryCategories.find((category) => category.key === control)
                ?.slug as ROUTES) ?? ROUTES.GALERIA
            }
            onMouseEnter={() => onChange(index)}
            active={activeEffect.category === control}
            ariaLabel={`${t("Kliknij, aby przejdż do galerii o kategorii")} ${t(control)}`}
          >
            {t(control)}
          </CategoryButton>
          {index + 1 < controls.length && (
            <Box display={{ base: "none", sm: "initial" }}>
              <MdCircle color={blackAlpha} size={16} />
            </Box>
          )}
        </Wrap>
      ))}
    </Wrap>
  );
};

export default WorkEffectControls;
