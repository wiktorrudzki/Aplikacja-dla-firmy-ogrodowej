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
import { NavigationMarginContainer } from "@src/components/navigation-margin-container";

const Contact: GatsbyPageWithLayout = () => {
  const { contactCardIconOffsetRem } = useResponsiveValues();
  return (
    <NavigationMarginContainer
      py={{
        base: 8,
        md: 8,
        lg: 12,
      }}
    >
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
    </NavigationMarginContainer>
  );
};

Contact.hideEstimateCard = true;

export default Contact;

export const Head: HeadFC = ({ location }) => (
  <SEO title={t("contact")} path={location.pathname} />
);
