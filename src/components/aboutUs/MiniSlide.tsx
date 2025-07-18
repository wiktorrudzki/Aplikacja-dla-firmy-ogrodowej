import { Slide } from "@src/types/slide";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useMemo } from "react";
import { Heading1Anton } from "../typography";
import { Box } from "@chakra-ui/react";
import { t } from "@src/utils/i18n";
import "./MiniSlide.css";

type Props = {
  zIndex: number;
  slide: Slide;
  onClick: () => void;
};

const MiniSlide = ({ slide, zIndex, onClick }: Props) => {
  const image = useMemo(
    () => getImage(slide.featuredImage),
    [slide.featuredImage],
  );

  return image != undefined ? (
    <Box
      w={{ base: "xs", "2xl": "sm" }}
      h={{ base: "md", "2xl": "lg" }}
      rounded={32}
      position="relative"
      boxShadow="miniSlider"
      overflow="hidden"
      cursor="pointer"
      transition="transform 0.25s ease"
      className="zoom-mini-slider"
      onClick={onClick}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        rounded={8}
        zIndex={zIndex * 10 + 2}
      />
      <GatsbyImage
        style={{
          height: "100%",
          width: "100%",
          borderRadius: 32,
        }}
        image={image}
        alt={t(slide.alt)}
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        zIndex={zIndex + 10 + 3}
        background="linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.33))"
        borderRadius={32}
      />
      <Heading1Anton
        fontFamily="anton"
        position="absolute"
        style={{ position: "absolute", left: "6%", top: "70%" }}
        zIndex={zIndex + 10 + 4}
      >
        {t(slide.title)}
      </Heading1Anton>
    </Box>
  ) : null;
};

export default MiniSlide;
