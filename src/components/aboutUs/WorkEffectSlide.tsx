import { Box } from "@chakra-ui/react";
import { ImageJsonNode } from "@src/types/graphql";
import { t } from "@src/utils/i18n";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

type Props = {
  image: ImageJsonNode;
};

const WorkEffectSlide = ({ image }: Props) =>
  getImage(image.childImageSharp ?? null) != undefined ? (
    <>
      <GatsbyImage
        image={getImage(image.childImageSharp ?? null)!}
        alt={t(image.altKey)}
        style={{
          position: "fixed",
          height: "100%",
          width: "100%",
        }}
      />
      <Box
        w="100%"
        h="100%"
        pos="absolute"
        opacity={0.5}
        background="linear-gradient(to bottom, black, transparent)"
      />
    </>
  ) : null;

export default WorkEffectSlide;
