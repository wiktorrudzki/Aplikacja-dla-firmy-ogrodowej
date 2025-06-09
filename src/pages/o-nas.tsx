import { Box } from "@chakra-ui/react";
import { HeroSlider } from "@src/components/aboutUs";
import { GraphQL } from "@src/types/grapql";
import { GatsbyPageWithLayout } from "@src/types/page";
import { Slide } from "@src/types/slide";
import { graphql, PageProps } from "gatsby";
import React from "react";

const About: GatsbyPageWithLayout<PageProps<GraphQL<Slide>>> = ({
  data: { data: slides },
}) => (
  <Box>
    <HeroSlider slides={slides.nodes.map((s) => s.frontmatter)} />
  </Box>
);

export default About;

export const pageQuery = graphql`
  {
    data: allMdx(
      filter: { internal: { contentFilePath: { regex: "/our-values/" } } }
      sort: { frontmatter: { id: ASC } }
    ) {
      nodes {
        ...OurValues
      }
    }
  }
`;
