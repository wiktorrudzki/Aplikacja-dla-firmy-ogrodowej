import { useToken, Wrap } from "@chakra-ui/react";
import React from "react";
import CategoryButton from "./CatergoryButton";
import { MdCircle } from "react-icons/md";
import { t } from "@src/utils/i18n";
import { GalleryJsonNode } from "@src/types/graphql";
import routes from "@data/routes.json";

type Props = {
  activeEffect: GalleryJsonNode;
  effects: GalleryJsonNode[];
  onChange: (effect: GalleryJsonNode) => void;
};

const WorkEffectControls = ({ activeEffect, effects, onChange }: Props) => {
  const [blackAlpha] = useToken("colors", ["blackAlpha.700"]);

  return (
    <Wrap opacity="0.9" gap={8} bg="white" rounded="full" padding={4}>
      {effects.map((effect, index) => (
        <Wrap
          alignItems="center"
          key={`${effect.category}-${effect.order}`}
          gap={8}
        >
          <CategoryButton
            to={routes.GALERIA} // todo - adjust specific path when gallery page will be implemented
            onMouseEnter={() => onChange(effect)}
            active={activeEffect.category === effect.category}
          >
            {t(effect.category)}
          </CategoryButton>
          {index + 1 < effects.length && (
            <MdCircle color={blackAlpha} size={16} />
          )}
        </Wrap>
      ))}
    </Wrap>
  );
};

export default WorkEffectControls;
