import { ROUTES } from "@src/constants";
import { t } from "@src/utils/i18n";
import React from "react";
import { ContentCardsWithImage, ContentCardButton } from "../content-card";
import { graphql, useStaticQuery } from "gatsby";
import { Heading1, Paragraph } from "@src/components/typography";
import { ImageJsonNode } from "@src/types/graphql";
import { getImageJsonImage } from "@src/helpers";
import { ContainerSection } from "../section";

type QueryType = {
  imageJson: ImageJsonNode<"id" | "altKey" | "childImageSharp">;
};

function ContactUs() {
  const { imageJson } = useStaticQuery<QueryType>(graphql`
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
    <ContainerSection>
      <ContentCardsWithImage
        backgroundImageDetails={{ data: imageData, alt: t(imageJson.altKey) }}
      >
        <Heading1 overflowWrap="anywhere">{t("still-wondering")}</Heading1>
        <Paragraph>{t("still-wondering-description")}</Paragraph>
        <ContentCardButton to={ROUTES.KONTAKT}>
          {t("contact-with-us")}
        </ContentCardButton>
      </ContentCardsWithImage>
    </ContainerSection>
  );
}

export default ContactUs;
