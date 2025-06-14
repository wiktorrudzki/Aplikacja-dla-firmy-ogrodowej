import { graphql, useStaticQuery } from "gatsby";
import React from "react";

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

function useSiteMetaData() {
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
  return site;
}

export default useSiteMetaData;
