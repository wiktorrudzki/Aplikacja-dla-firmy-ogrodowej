import { SEO } from "@src/components/seo";
import { t } from "@i18n";
import { HeadFC, Link } from "gatsby";
import { ServiceCards } from "@src/components/service-card";
import { GraphQLNodes, ImageJsonNode } from "@src/types/graphql";
import { GatsbyPageWithLayout } from "@src/types/page";
import { ServiceNode } from "@src/types/graphql";
import { graphql, PageProps } from "gatsby";
import React from "react";
import { ROUTES } from "@src/constants";
import { MainContainerWithBreadcrumbs } from "@src/components/main-container";

type QueryType = GraphQLNodes<
  "allService",
  ServiceNode<
    "title" | "slug" | "iconMapKey" | "imageJson",
    ImageJsonNode<"id" | "altKey" | "childImageSharp">
  >
>;

export const pageQuery = graphql`
  {
    allService(
      filter: { categories: { in: INDIVIDUAL_CLIENT } }
      sort: { orderIndividual: ASC }
    ) {
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
    <Link to={ROUTES.KLIENT_INDYWIDUALNY}>{t("individual-client")}</Link>,
  ];

  return (
    <MainContainerWithBreadcrumbs breadcrumbs={breadcrumbs}>
      <ServiceCards services={allService.nodes} />
    </MainContainerWithBreadcrumbs>
  );
};

export default IndexPage;

export const Head: HeadFC = ({ location }) => (
  <SEO title={t("individual-client")} path={location.pathname} />
);
