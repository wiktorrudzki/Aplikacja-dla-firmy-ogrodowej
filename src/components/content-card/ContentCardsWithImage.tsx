import { Grid } from "@chakra-ui/react";
import React from "react";
import ContentCard from "./ContentCard";
import { ImageDetails } from "@src/types/images";

type ContentCardsWithImageProps = {
  children: React.ReactNode;
  backgroundImageDetails: ImageDetails;
  imageFirst?: boolean;
};

function ContentCardsWithImage({
  children,
  backgroundImageDetails,
  imageFirst = false,
}: ContentCardsWithImageProps) {
  const elements = [<ContentCard gap={[6, 12]}>{children}</ContentCard>];
  const ImageContentCard = (
    <ContentCard backgroundImageDetails={backgroundImageDetails} />
  );

  imageFirst
    ? elements.unshift(ImageContentCard)
    : elements.push(ImageContentCard);

  return (
    <Grid
      templateColumns={{ base: "initial", lg: "repeat(2, 1fr)" }}
      templateRows={{ base: "repeat(2, 1fr)", lg: "initial" }}
    >
      {elements}
    </Grid>
  );
}

export default ContentCardsWithImage;
