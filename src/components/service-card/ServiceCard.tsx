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
        image={image}
        alt={service.alt}
      />
      <Box color="white" width={20} height={20} as={Icon} />
      <Heading2 fontWeight={700} color="white" textAlign="center">
        {t(service.title)}
      </Heading2>
    </Stack>
  );
};

export default ServiceCard;
