import { SEO } from "@src/components/seo";
import { GatsbyPageWithLayout } from "@src/types/page";
import { t } from "@i18n";
import { HeadFC } from "gatsby";
import { graphql, PageProps } from "gatsby";
import React from "react";
import { ServiceCards } from "@src/components/service-card";
import { GraphQLMdxNodes } from "@src/types/graphql";
import { Service } from "@src/types/services";

const IndexPage: GatsbyPageWithLayout<PageProps<GraphQLMdxNodes<Service>>> = ({
  data: { data },
}) => (
  <div
    style={{
      minHeight: "100svh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}
  >
    <ServiceCards services={data.nodes.map((node) => node.frontmatter)} />
  </div>
);

export default IndexPage;

export const Head: HeadFC = ({ location }) => (
  <SEO title={t("business-client")} path={location.pathname} />
);
export const pageQuery = graphql`
  {
    data: allMdx(
      filter: {
        internal: { contentFilePath: { regex: "/services/" } }
        frontmatter: { categories: { in: ["DLA_FIRM"] } }
      }
    ) {
      nodes {
        ...ServiceFields
      }
    }
  }
`;
