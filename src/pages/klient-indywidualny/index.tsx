import { DataType } from "@src/types/images";
import { GatsbyPageWithLayout } from "@src/types/page";
import { graphql, PageProps } from "gatsby";
import React from "react";

const IndexPage: GatsbyPageWithLayout<PageProps<DataType>> = ({ data }) => {
  return (
    <div
      style={{
        height: "100svh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    ></div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  {
    images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      nodes {
        relativePath
        ...GatsbyImageFragment
      }
    }
  }
`;
