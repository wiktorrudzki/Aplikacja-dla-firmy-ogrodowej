import { GatsbyPageWithLayout } from "@src/types/page";
import { graphql, PageProps } from "gatsby";
import React from "react";
import { ServiceCards } from "@src/components/service-card";
import { GraphQL, ServiceNode } from "@src/types/graphql";

const IndexPage: GatsbyPageWithLayout<PageProps<GraphQL<ServiceNode>>> = ({
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
    <ServiceCards services={data.nodes} />
  </div>
);

export default IndexPage;

export const pageQuery = graphql`
  {
    data: allService(filter: { categories: { in: BUSINESS_CLIENT } }) {
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
