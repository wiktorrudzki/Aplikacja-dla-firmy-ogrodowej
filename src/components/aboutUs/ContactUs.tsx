import { Container, ContainerProps } from "@chakra-ui/react";
import { ROUTES } from "@src/constants";
import { t } from "@src/utils/i18n";
import React from "react";
import { ContentCardsWithImage, ContentCardButton } from "../content-card";
import { graphql, useStaticQuery } from "gatsby";
import { Heading1, Paragraph } from "@src/components/typography";
import { ImageJsonNode } from "@src/types/graphql";
import { getImageJsonImage } from "@src/helpers";

type ImageJsonType = Required<
  Pick<ImageJsonNode, "id" | "altKey" | "childImageSharp">
>;

function ContactUs({ ...props }: ContainerProps) {
  const { imageJson } = useStaticQuery<{ imageJson: ImageJsonType }>(graphql`
    {
      imageJson(title: { eq: "House" }) {
        id
        altKey
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  const imageData = getImageJsonImage(imageJson);

  return (
    <Container my={[12, 24, 32]} {...props}>
      <ContentCardsWithImage
        backgroundImageDetails={{ data: imageData, alt: t(imageJson.altKey) }}
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
