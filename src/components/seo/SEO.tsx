import { lang } from "@i18n";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

type SEOProps = {
  title: string;
  description?: string;
  image?: string;
  path: string;
  children?: React.ReactNode;
};

type siteMetadata = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
      keywords: string;
      image: string;
      siteUrl: string;
    };
  };
};

type SEOTag =
  | { property: string; name?: never; content: string }
  | {
      name: string;
      property?: never;
      content: string;
    };

function SEO({ title, description, image, path, children }: SEOProps) {
  const { site } = useStaticQuery<siteMetadata>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          keywords
          image
          siteUrl
        }
      }
    }
  `);
  const siteTitle = `${site.siteMetadata.title}${title ? ` - ${title}` : ""}`;

  const SEOTags: SEOTag[] = [
    {
      name: "description",
      content: description ? description : site.siteMetadata.description,
    },
    {
      name: "keywords",
      content: site.siteMetadata.keywords,
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
      content: description ? description : site.siteMetadata.description,
    },
    {
      property: "og:image",
      content: image ? image : site.siteMetadata.image,
    },
    {
      property: "og:url",
      content: `${site.siteMetadata.siteUrl}${path || ""}`,
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      name: "twitter:creator",
      content: site.siteMetadata.author,
    },
    {
      name: "twitter:title",
      content: title ? title : site.siteMetadata.title,
    },
    {
      name: "twitter:description",
      content: description ? description : site.siteMetadata.description,
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
