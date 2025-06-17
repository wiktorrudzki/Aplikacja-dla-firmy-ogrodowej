import { Stack, Text } from "@chakra-ui/react";
import { MainCard } from "@src/components/main-card";
import { t } from "@src/utils/i18n";
import { GatsbyPageWithLayout } from "@src/types/page";
import React from "react";
import { ContactCards, GoogleMap } from "@src/components/contact";
import { NavigationMarginContainer } from "@src/components/navigation-margin-container";
import constants from "@src/constants";
import { SEO } from "@src/components/seo";
import { HeadFC } from "gatsby";

const Contact: GatsbyPageWithLayout = () => (
  <NavigationMarginContainer paddingTop={8} paddingBottom={8}>
    <MainCard>
      <Stack
        gap={{ base: 8, md: 16 }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          marginBottom={{
            base: `${constants.contactCardIconBaseOffsetRem}rem`,
            md: `${constants.contactCardIconMdOffsetRem}rem`,
          }}
          textStyle={{ base: "heading-2", md: "heading-1" }}
          textTransform="uppercase"
          textAlign="center"
        >
          {t("Chcesz się z nami skontaktować?")}
        </Text>
        <ContactCards />
        <GoogleMap />
      </Stack>
    </MainCard>
  </NavigationMarginContainer>
);

export default Contact;

export const Head: HeadFC = ({ location }) => (
  <SEO title={t("contact")} path={location.pathname} />
);
