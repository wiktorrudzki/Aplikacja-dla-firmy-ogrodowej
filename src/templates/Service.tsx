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

type ImageJsonType = Required<
  Pick<ImageJsonNode, "id" | "altKey" | "childImageSharp">
>;

type Props = {
  pageContext: Required<
    Pick<ServiceNode<ImageJsonType>, "id" | "body" | "imageJson" | "iconMapKey">
  >;
};

const shortcodes = { h1: Heading1, p: Paragraph };

const ServicePageTemplate = ({ pageContext }: Props) => {
  const image = getImageJsonImage(pageContext.imageJson);
  const Icon = getIconFromName(pageContext.iconMapKey);
  return (
    <>
      <Icon />
      <ExtraExtraLargeHeading>{pageContext.id}</ExtraExtraLargeHeading>
      <GatsbyImage image={image} alt={t(pageContext.imageJson.altKey)} />
      <MDXProvider components={shortcodes}>{pageContext.body}</MDXProvider>
    </>
  );
};
export default ServicePageTemplate;
