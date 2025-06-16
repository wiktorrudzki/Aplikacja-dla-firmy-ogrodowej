import { ServiceCards } from "@src/components/service-card";
import { GraphQL } from "@src/types/graphql";
import { GatsbyPageWithLayout } from "@src/types/page";
import { ServiceNode } from "@src/types/graphql";
import { graphql, PageProps } from "gatsby";
import React from "react";

const IndexPage: GatsbyPageWithLayout<PageProps<GraphQL<ServiceNode>>> = ({
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
      <ServiceCards services={data.nodes} />
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  {
    data: allService(filter: { categories: { in: INDIVIDUAL_CLIENT } }) {
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
