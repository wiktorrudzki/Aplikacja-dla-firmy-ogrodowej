import { Box, Stack, Text } from "@chakra-ui/react";
import { ServiceCard as ServiceCardType } from "@src/types/services";
import { t } from "@src/utils/i18n";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

type Props = {
  card: ServiceCardType;
};

const ServiceCard = ({ card }: Props) => {
  const { image } = card;

  const value = getImage(image?.childImageSharp?.gatsbyImageData);

  if (!value) {
    return null;
  }

  return (
    <Stack
      rounded={8}
      width={300}
      height={300}
      bg="rgba(0,0,0,0.25)"
      justify="center"
      align="center"
      gap={4}
      position="relative"
    >
      <GatsbyImage
        objectFit="cover"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: -1,
          borderRadius: 8,
        }}
        image={value}
        alt={image.alt ?? t("Brak tekstu alternatywnego")}
      />
      <Box color="white" width={20} height={20} as={card.icon} />
      <Text textAlign="center" textStyle="heading-2" color="white">
        {t(card.text)}
      </Text>
    </Stack>
  );
};

export default ServiceCard;
