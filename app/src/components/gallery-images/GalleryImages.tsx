import { Grid, GridItem } from "@chakra-ui/react";
import { getImageJsonImage } from "@src/helpers";
import { ImageJsonNode } from "@src/types/graphql";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React, { useState } from "react";
import FullScreenImages from "./FullScreenImages";
import { t } from "@src/utils/i18n";

type Props = {
  imageJsons: Array<ImageJsonNode<"id" | "altKey" | "childImageSharp">>;
};

const calculateImageRowSpan = (image: IGatsbyImageData) =>
  Math.floor(image.height / (image.width / 8));

const GalleryImages = ({ imageJsons }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openDialog = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  return (
    <FullScreenImages
      images={imageJsons}
      open={isOpen}
      onOpenChange={setIsOpen}
      startIndex={selectedIndex}
    >
      <Grid
        justifySelf="center"
        templateColumns={{
          base: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={{ base: "4", md: "8" }}
        my="4"
        gridAutoRows="10px"
      >
        {imageJsons.map((imageJson, index) => {
          const image = getImageJsonImage(imageJson);
          return (
            <GridItem
              key={imageJson.id}
              style={{
                cursor: "pointer",
                gridRowEnd: `span ${calculateImageRowSpan(image)}`,
              }}
              onClick={() => openDialog(index)}
              transition="scale 0.25s ease"
              _hover={{
                scale: 1.05,
              }}
            >
              <GatsbyImage
                image={image}
                style={{ height: "100%", borderRadius: "0.5rem" }}
                alt={t(imageJson.altKey)}
              />
            </GridItem>
          );
        })}
      </Grid>
    </FullScreenImages>
  );
};

export default GalleryImages;
