import { GatsbyPageWithLayout } from "@src/types/page";
import { graphql, PageProps } from "gatsby";
import React from "react";
import { ServiceCards } from "@src/components/service-card";
import { GraphQL } from "@src/types/grapql";
import { Service } from "@src/types/services";

const IndexPage: GatsbyPageWithLayout<PageProps<GraphQL<Service>>> = ({
  data: { data },
}) => (
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

export default IndexPage;

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
