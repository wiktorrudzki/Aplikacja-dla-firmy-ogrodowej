import { Slide } from "@src/types/slide";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { Heading1Anton } from "../typography";
import { Box } from "@chakra-ui/react";
import { t } from "@src/utils/i18n";
import "./MiniSlide.css";

type Props = {
  zIndex: number;
  slide: Slide;
  onClick: () => void;
};

const MiniSlide = ({ slide, zIndex, onClick }: Props) =>
  getImage(slide.featuredImage) != undefined ? (
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
        bgGradient="linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.33))"
        rounded={8}
        zIndex={zIndex * 10 + 2}
      />
      <GatsbyImage
        style={{
          height: "100%",
          width: "100%",
          borderRadius: 32,
        }}
        image={getImage(slide.featuredImage)!}
        alt={slide.alt}
      />
      <Heading1Anton
        fontFamily="anton"
        position="absolute"
        style={{ position: "absolute", left: "6%", top: "70%" }}
      >
        {t(slide.title)}
      </Heading1Anton>
    </Box>
  ) : null;

export default MiniSlide;
