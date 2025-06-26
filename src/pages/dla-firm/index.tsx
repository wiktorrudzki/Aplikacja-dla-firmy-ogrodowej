import { SEO } from "@src/components/seo";
import { GatsbyPageWithLayout } from "@src/types/page";
import { t } from "@i18n";
import { HeadFC } from "gatsby";
import { graphql, PageProps } from "gatsby";
import React from "react";
import { ServiceCards } from "@src/components/service-card";
import { GraphQLNodes, ImageJsonNode, ServiceNode } from "@src/types/graphql";

type QueryType = GraphQLNodes<
  "allService",
  ServiceNode<
    "title" | "iconMapKey" | "imageJson",
    ImageJsonNode<"id" | "altKey" | "childImageSharp">
  >
>;

export const pageQuery = graphql`
  {
    allService(filter: { categories: { in: BUSINESS_CLIENT } }) {
      nodes {
        title
        iconMapKey
        imageJson {
          id
          altKey
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

const IndexPage: GatsbyPageWithLayout<PageProps<QueryType>> = ({ data }) => {
  const { allService } = data;
  return (
    <div
      style={{
        minHeight: "100svh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <ServiceCards services={allService.nodes} />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = ({ location }) => (
  <SEO title={t("business-client")} path={location.pathname} />
);
