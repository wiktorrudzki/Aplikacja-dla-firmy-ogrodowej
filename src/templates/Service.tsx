import React from "react";
import { MDXProvider } from "@mdx-js/react";
import {
  ExtraExtraLargeHeading,
  Heading1,
  Paragraph,
} from "@src/components/typography";
import { ServiceNode } from "@src/types/graphql";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { t } from "@i18n";
import { getIconFromName } from "@src/helpers";

type Props = {
  pageContext: Required<ServiceNode>;
};

const shortcodes = { h1: Heading1, p: Paragraph };

const ServicePageTemplate = ({ pageContext }: Props) => {
  const image = getImage(pageContext.imageJson.childImageSharp ?? null);

  if (!image) return;
  const Icon = getIconFromName(pageContext.iconMapKey);
  return (
    <>
      <Icon />
      <ExtraExtraLargeHeading>{pageContext.id}</ExtraExtraLargeHeading>
      <GatsbyImage image={image} alt={t(pageContext.imageJson.altKey ?? "")} />
      <MDXProvider components={shortcodes}>{pageContext.body}</MDXProvider>
    </>
  );
};
export default ServicePageTemplate;
