import { Container, ContainerProps } from "@chakra-ui/react";
import { ROUTES } from "@src/constants";
import { t } from "@src/utils/i18n";
import React from "react";
import { ContentCardsWithImage, ContentCardButton } from "../content-card";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { Heading1, Paragraph } from "@src/components/typography";
import { ImageNode } from "@src/types/images";

function ContactUs({ ...props }: ContainerProps) {
  const { file: image } = useStaticQuery<{ file: ImageNode }>(graphql`
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
  const imageData = getImage(image.childImageSharp);

  if (!imageData) throw new Error(`Image not found: ${image.relativePath}`);

  return (
    <Container my={[12, 24, 32]} {...props}>
      <ContentCardsWithImage
        backgroundImageDetails={{ data: imageData, alt: "house" }}
      >
        <Heading1 overflowWrap="anywhere">{t("still-wondering")}</Heading1>
        <Paragraph>{t("still-wondering-description")}</Paragraph>
        <ContentCardButton to={ROUTES.KONTAKT}>
          {t("contact-with-us")}
        </ContentCardButton>
      </ContentCardsWithImage>
    </Container>
  );
}

export default ContactUs;
