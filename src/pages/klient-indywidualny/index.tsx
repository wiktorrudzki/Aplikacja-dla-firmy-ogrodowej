import { SEO } from "@src/components/seo";
import { t } from "@i18n";
import { HeadFC } from "gatsby";
import { ServiceCards } from "@src/components/service-card";
import { GraphQLNodes } from "@src/types/graphql";
import { GatsbyPageWithLayout } from "@src/types/page";
import { ServiceNode } from "@src/types/graphql";
import { graphql, PageProps } from "gatsby";
import React from "react";

const IndexPage: GatsbyPageWithLayout<
  PageProps<GraphQLNodes<"allService", ServiceNode>>
> = ({ data: { allService } }) => {
  return (
    <div
      style={{
        height: "100svh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ServiceCards services={allService.nodes} />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = ({ location }) => (
  <SEO title={t("individual-client")} path={location.pathname} />
);
export const pageQuery = graphql`
  {
    allService(filter: { categories: { in: INDIVIDUAL_CLIENT } }) {
      nodes {
        title
        iconMapKey
        imageJson {
          altKey
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
