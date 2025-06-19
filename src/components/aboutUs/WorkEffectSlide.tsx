import { ImageJsonNode } from "@src/types/graphql";
import { t } from "@src/utils/i18n";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

type Props = {
  image: ImageJsonNode;
};

const WorkEffectSlide = ({ image }: Props) =>
  getImage(image.childImageSharp ?? null) != undefined ? (
    <GatsbyImage
      image={getImage(image.childImageSharp ?? null)!}
      alt={t(image.altKey)}
      style={{
        position: "fixed",
        height: "100%",
        width: "100%",
        filter: "brightness(0.75)",
      }}
    />
  ) : null;

export default WorkEffectSlide;
