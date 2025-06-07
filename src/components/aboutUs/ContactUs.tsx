import { Container, ContainerProps, Heading, Text } from "@chakra-ui/react";
import { ROUTES } from "@src/constants";
import { t } from "@src/utils/i18n";
import React from "react";
import { ContentCardsWithImage, ContentCardButton } from "../content-card";
import { graphql, useStaticQuery } from "gatsby";
import { ImageFileQueryResult } from "@src/types/graphql";
import { getImage } from "gatsby-plugin-image";

function ContactUs({ ...props }: ContainerProps) {
  const { file: image } = useStaticQuery<ImageFileQueryResult>(graphql`
    query {
      file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "house.jpg" }
      ) {
        relativePath
        ...GatsbyImageFragment
      }
    }
  `);
  const imageData = getImage(image);
  return (
    <Container my={[12, 24, 32]} {...props}>
      <ContentCardsWithImage
        backgroundImageDetails={{ data: imageData!, alt: "house" }}
      >
        <Heading
          as="h1"
          textStyle="heading-1"
          textTransform="uppercase"
          overflowWrap="anywhere"
        >
          {t("still-wondering")}
        </Heading>
        <Text>{t("still-wondering-description")}</Text>
        <ContentCardButton to={ROUTES.KONTAKT}>
          {t("contact-with-us")}
        </ContentCardButton>
      </ContentCardsWithImage>
    </Container>
  );
}

export default ContactUs;
