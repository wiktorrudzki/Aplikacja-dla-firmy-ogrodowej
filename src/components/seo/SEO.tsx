import { lang } from "@i18n";
import useSiteMetadata from "@src/hooks/useSiteMetadata";
import React, { useMemo } from "react";

type SEOProps = {
  title: string;
  description?: string;
  image?: string;
  path: string;
  children?: React.ReactNode;
};

type SEOTag =
  | { property: string; name?: never; content: string }
  | {
      name: string;
      property?: never;
      content: string;
    };

function SEO({ title, description, image, path, children }: SEOProps) {
  const site = useSiteMetadata();

  const siteTitle = useMemo(
    () => `${site.siteMetadata.title}${title ? ` - ${title}` : ""}`,
    [site.siteMetadata.title, title],
  );

  const siteDescription = useMemo(
    () => description || site.siteMetadata.description,
    [description, site.siteMetadata.description],
  );

  const sitePath = useMemo(
    () => `${site.siteMetadata.siteUrl}${path || ""}`,
    [path, site.siteMetadata.siteUrl],
  );

  const SEOTags: SEOTag[] = [
    {
      name: "description",
      content: siteDescription,
    },
    {
      name: "keywords",
      content: site.siteMetadata.keywords,
    },
    {
      property: "og:locale",
      content: lang,
    },
    {
      property: "og:site_name",
      content: site.siteMetadata.title,
    },
    {
      property: "og:title",
      content: siteTitle,
    },
    {
      property: "og:description",
      content: siteDescription,
    },
    {
      property: "og:image",
      content: image ? image : site.siteMetadata.image,
    },
    {
      property: "og:url",
      content: sitePath,
    },
    {
      property: "og:type",
      content: "website",
    },
    { name: "twitter:site", content: site.siteMetadata.siteUrl },
    {
      name: "twitter:image",
      content: image ? image : site.siteMetadata.image,
    },
    {
      name: "twitter:url",
      content: sitePath,
    },
    {
      name: "twitter:creator",
      content: site.siteMetadata.author,
    },
    {
      name: "twitter:title",
      content: siteTitle,
    },
    {
      name: "twitter:description",
      content: siteDescription,
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
  ];

  return (
    <>
      <html lang={lang} />
      <title>{siteTitle}</title>
      {SEOTags.map((tags) => (
        <meta {...tags} key={"name" in tags ? tags.name : tags.property} />
      ))}
      {children}
    </>
  );
}

export default SEO;
