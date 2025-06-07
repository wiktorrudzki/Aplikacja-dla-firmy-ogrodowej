import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Slide } from "@src/types/slide";
import { t } from "@i18n";

const imageStyle: React.CSSProperties = {
  position: "fixed",
  height: "100%",
  width: "100%",
  filter: "brightness(0.5)",
};

const OurValuesSlides: Slide[] = [
  {
    id: 1,
    title: t("our-values-title-1"),
    description: t("our-values-description-1"),
    imageElement: (
      <StaticImage
        src="../assets/images/taras 2.webp"
        alt="taras"
        style={imageStyle}
      />
    ),
  },
  {
    id: 2,
    title: t("our-values-title-2"),
    description: t("our-values-description-2"),
    imageElement: (
      <StaticImage
        src="../assets/images/van.webp"
        alt="van"
        style={imageStyle}
      />
    ),
  },
  {
    id: 3,
    title: t("our-values-title-3"),
    description: t("our-values-description-3"),
    imageElement: (
      <StaticImage
        src="../assets/images/garden with path.webp"
        alt="garden with path"
        style={imageStyle}
      />
    ),
  },
  {
    id: 4,
    title: t("our-values-title-4"),
    description: t("our-values-description-4"),
    imageElement: (
      <StaticImage
        src="../assets/images/taras.webp"
        alt="taras"
        style={imageStyle}
      />
    ),
  },
];

export default OurValuesSlides;
