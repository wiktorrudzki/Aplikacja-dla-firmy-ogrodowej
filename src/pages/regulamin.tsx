import { SEO } from "@src/components/seo";
import { t } from "@i18n";
import { HeadFC } from "gatsby";
import React from "react";
import { MainContainer } from "@src/components/main-container";
import { Heading1 } from "@src/components/typography";

const Regulations = () => {
  return (
    <MainContainer>
      <Heading1>Regulamin</Heading1>
    </MainContainer>
  );
};

export default Regulations;

export const Head: HeadFC = ({ location }) => (
  <SEO title={t("regulations")} path={location.pathname} />
);
