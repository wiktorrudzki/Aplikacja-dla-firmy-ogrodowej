import { Box, Stack } from "@chakra-ui/react";
import { getIconFromName } from "@src/helpers";
import { Service } from "@src/types/services";
import { t } from "@src/utils/i18n";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { Heading2 } from "../typography";

type Props = {
  service: Service;
};

const ServiceCard = ({ service }: Props) => {
  const image = getImage(service.featuredImage);

  if (!image) return null;

  const Icon = getIconFromName(service.icon);

  return (
    <Stack
      position="relative"
      rounded={8}
      width={{ base: 48, sm: 64, lg: 72 }}
      height={{ base: 48, sm: 64, lg: 72 }}
      bg="rgba(0,0,0,0.25)"
      gap={4}
      justify="center"
      align="center"
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
        image={image}
        alt={service.alt}
      />
      <Box
        color="white"
        width={{ base: 12, sm: 16, md: 20 }}
        height={{ base: 12, sm: 16, md: 20 }}
        as={Icon}
      />
      <Heading2 fontWeight={700} color="white" textAlign="center">
        {t(service.title)}
      </Heading2>
    </Stack>
  );
};

export default ServiceCard;
