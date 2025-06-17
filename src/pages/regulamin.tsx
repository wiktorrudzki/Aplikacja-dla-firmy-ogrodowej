import { Box } from "@chakra-ui/react";
import { SEO } from "@src/components/seo";
import { t } from "@i18n";
import { HeadFC } from "gatsby";
import React from "react";

const Regulations = () => {
  return <Box height="125vh">Regulations</Box>;
};

export default Regulations;

export const Head: HeadFC = ({ location }) => (
  <SEO title={t("regulations")} path={location.pathname} />
);
