import { SEO } from "@src/components/seo";
import { GatsbyPageWithLayout } from "@src/types/page";
import { t } from "@i18n";
import { HeadFC, Link } from "gatsby";
import { graphql, PageProps } from "gatsby";
import React from "react";
import { ServiceCards } from "@src/components/service-card";
import { GraphQLNodes, ImageJsonNode, ServiceNode } from "@src/types/graphql";
import { MainContainerWithBreadcrumbs } from "@src/components/main-container";
import { ROUTES } from "@src/constants";

type QueryType = GraphQLNodes<
  "allService",
  ServiceNode<
    "title" | "slug" | "iconMapKey" | "imageJson",
    ImageJsonNode<"id" | "altKey" | "childImageSharp">
  >
>;

export const pageQuery = graphql`
  {
    allService(filter: { categories: { in: BUSINESS_CLIENT } }) {
      nodes {
        title
        slug
        iconMapKey
        imageJson {
          id
          altKey
          ...ServiceImage
        }
      }
    }
  }
`;

const IndexPage: GatsbyPageWithLayout<PageProps<QueryType>> = ({ data }) => {
  const { allService } = data;
  const breadcrumbs = [
    <Link to={ROUTES.DLA_FIRM}>{t("business-client")}</Link>,
  ];

  return (
    <MainContainerWithBreadcrumbs breadcrumbs={breadcrumbs}>
      <ServiceCards services={allService.nodes} />
    </MainContainerWithBreadcrumbs>
  );
};

export default IndexPage;

export const Head: HeadFC = ({ location }) => (
  <SEO title={t("business-client")} path={location.pathname} />
);
