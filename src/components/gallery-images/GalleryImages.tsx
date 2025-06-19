import { Grid, GridItem } from "@chakra-ui/react";
import { getImageJsonImage } from "@src/helpers";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

type Props = {
  imageJsons: Array<Parameters<typeof getImageJsonImage>[0]> | null;
};

function GalleryImages({ imageJsons }: Props) {
  if (!imageJsons) return null;
  return (
    <Grid
      justifySelf="center"
      templateColumns={{
        base: "auto",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap="8"
      my="4"
    >
      {imageJsons.map((imageJson) => {
        if (!imageJson) return;
        const image = getImageJsonImage(imageJson);
        return (
          <GridItem
            key={imageJson.id}
            style={{
              gridRowEnd: `span ${Math.floor(image.height / (image.width / 8))}`,
            }}
          >
            <GatsbyImage
              image={image}
              style={{ height: "100%", borderRadius: "0.5rem" }}
              alt={imageJson.altKey}
            />
          </GridItem>
        );
      })}
    </Grid>
  );
}

export default GalleryImages;
