import { Box, LinkBox, LinkOverlay } from "@chakra-ui/react";
import {
  formatToRelativePath,
  getIconFromName,
  getImageJsonImage,
} from "@src/helpers";
import { ImageJsonNode, ServiceNode } from "@src/types/graphql";
import { t } from "@src/utils/i18n";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { Heading2 } from "../typography";
import { Link } from "gatsby";

export type ServiceCardDetails = ServiceNode<
  "title" | "slug" | "iconMapKey" | "imageJson",
  ImageJsonNode<"id" | "altKey" | "childImageSharp">
>;

type Props = {
  service: ServiceCardDetails;
};

const ServiceCard = ({ service }: Props) => {
  const image = getImageJsonImage(service.imageJson);
  const Icon = getIconFromName(service.iconMapKey);

  return (
    <LinkBox
      position="relative"
      display="flex"
      aspectRatio={{ base: 2.5, md: 1 }}
      w={{ base: "100%", md: "fit-content" }}
    >
      <GatsbyImage
        objectFit="cover"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          borderRadius: 8,
        }}
        image={image}
        alt={t(service.imageJson.altKey)}
      />

      <LinkOverlay
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={{ base: "2", md: "4" }}
        width={{ base: "100%", md: 72, lg: 80 }}
        rounded={8}
        bg="rgba(0,0,0,0.25)"
        color="white"
        zIndex={0}
        p="2"
        asChild
      >
        <Link to={formatToRelativePath(service.slug)}>
          <Box
            width={{ base: 8, sm: 16, md: 20 }}
            height={{ base: 8, sm: 16, md: 20 }}
            as={Icon}
          />
          <Heading2
            fontWeight={700}
            textAlign="center"
            overflowWrap="anywhere"
            size={{ base: "lg", md: "2xl" }}
          >
            {t(service.title)}
          </Heading2>
        </Link>
      </LinkOverlay>
    </LinkBox>
  );
};

export default ServiceCard;
