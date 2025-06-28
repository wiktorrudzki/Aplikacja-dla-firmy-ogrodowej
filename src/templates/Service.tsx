import React from "react";
import { MDXProvider } from "@mdx-js/react";
import {
  ExtraExtraLargeHeading,
  Heading1,
  Paragraph,
} from "@src/components/typography";
import { ImageJsonNode, ServiceNode } from "@src/types/graphql";
import { GatsbyImage } from "gatsby-plugin-image";
import { t } from "@i18n";
import { getIconFromName, getImageJsonImage } from "@src/helpers";

type Props = {
  pageContext: ServiceNode<
    "id" | "body" | "imageJson" | "iconMapKey",
    ImageJsonNode<"id" | "altKey" | "childImageSharp">
  >;
  children: React.ReactNode;
};

const shortcodes = { h1: Heading1, p: Paragraph };

const ServicePageTemplate = ({ pageContext, children }: Props) => {
  const image = getImageJsonImage(pageContext.imageJson);
  const Icon = getIconFromName(pageContext.iconMapKey);
  return (
    <>
      <Icon />
      <ExtraExtraLargeHeading>{pageContext.id}</ExtraExtraLargeHeading>
      <GatsbyImage image={image} alt={t(pageContext.imageJson.altKey)} />
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </>
  );
};
export default ServicePageTemplate;
