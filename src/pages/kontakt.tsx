import { Stack } from "@chakra-ui/react";
import { t } from "@src/utils/i18n";
import { GatsbyPageWithLayout } from "@src/types/page";
import React from "react";
import { ContactCards } from "@src/components/contact";
import { Heading1 } from "@src/components/typography";
import { GoogleMap } from "@src/components/google-map";
import { SEO } from "@src/components/seo";
import { HeadFC } from "gatsby";
import { useResponsiveValues } from "@src/hooks";
import { formatToRem } from "@src/helpers";
import { MainContainer } from "@src/components/main-container";

const Contact: GatsbyPageWithLayout = () => {
  const { contactCardIconOffsetRem } = useResponsiveValues();
  return (
    <MainContainer>
      <Stack
        gap={{ base: 8, md: 16 }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading1
          marginBottom={formatToRem(contactCardIconOffsetRem)}
          textTransform="uppercase"
          textAlign="center"
        >
          {t("Chcesz się z nami skontaktować?")}
        </Heading1>
        <ContactCards />
        <GoogleMap />
      </Stack>
    </MainContainer>
  );
};

Contact.hideEstimateCard = true;

export default Contact;

export const Head: HeadFC = ({ location }) => (
  <SEO title={t("contact")} path={location.pathname} />
);
