import { useToken, Wrap } from "@chakra-ui/react";
import React from "react";
import CategoryButton from "./CatergoryButton";
import { MdCircle } from "react-icons/md";
import { t } from "@src/utils/i18n";
import { GalleryJsonNode } from "@src/types/graphql";
import { ROUTES } from "@src/constants";

type Props = {
  controls: string[];
  activeEffect: GalleryJsonNode;
  onChange: (index: number) => void;
};

const WorkEffectControls = ({ controls, activeEffect, onChange }: Props) => {
  const [blackAlpha] = useToken("colors", ["blackAlpha.700"]);

  return (
    <Wrap opacity="0.9" gap={8} bg="white" rounded="full" padding={4}>
      {controls.map((control, index) => (
        <Wrap alignItems="center" key={`${control}-${index}`} gap={8}>
          <CategoryButton
            to={ROUTES.GALERIA} // todo - adjust specific path when gallery page will be implemented
            onMouseEnter={() => onChange(index)}
            active={activeEffect.category === control}
          >
            {t(control)}
          </CategoryButton>
          {index + 1 < controls.length && (
            <MdCircle color={blackAlpha} size={16} />
          )}
        </Wrap>
      ))}
    </Wrap>
  );
};

export default WorkEffectControls;
