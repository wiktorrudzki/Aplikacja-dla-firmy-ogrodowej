import { SEO } from "@src/components/seo";
import { GatsbyPageWithLayout } from "@src/types/page";
import { t } from "@i18n";
import { HeadFC } from "gatsby";
import React from "react";

const IndexPage: GatsbyPageWithLayout = () => {
  return <div>IndexPage</div>;
};

export default IndexPage;

export const Head: HeadFC = ({ location }) => (
  <SEO title={t("individual-client")} path={location.pathname} />
);
