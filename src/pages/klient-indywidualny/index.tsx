import { ServiceCards } from "@src/components/service-card";
import { GraphQLMdxNodes } from "@src/types/graphql";
import { GatsbyPageWithLayout } from "@src/types/page";
import { Service } from "@src/types/services";
import { graphql, PageProps } from "gatsby";
import React from "react";

const IndexPage: GatsbyPageWithLayout<PageProps<GraphQLMdxNodes<Service>>> = ({
  data: { data },
}) => {
  return (
    <div
      style={{
        height: "100svh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ServiceCards services={data.nodes.map((node) => node.frontmatter)} />
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  {
    data: allMdx(
      filter: {
        internal: { contentFilePath: { regex: "/services/" } }
        frontmatter: { categories: { in: ["KLIENT_INDYWIDUALNY"] } }
      }
    ) {
      nodes {
        ...ServiceFields
      }
    }
  }
`;
