import { Container, Stack, Text } from "@chakra-ui/react";
import { MainCard } from "@src/components/main-card";
import { t } from "@src/utils/i18n";
import { GatsbyPageWithLayout } from "@src/types/page";
import React from "react";
import { ContactCards, GoogleMap } from "@src/components/contact";

const Contact: GatsbyPageWithLayout = () => (
  <Container
    marginTop={{
      base: `${24 * 2 + 48}px`, // calculation based on the navigation height in various resolution
      md: `${24 * 2 + 96}px`, // calculation based on the navigation height in various resolution TODO - move to constants
    }}
    paddingTop={8}
    paddingBottom={8}
  >
    <MainCard>
      <Stack
        gap={{ base: 8, md: 16 }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          marginBottom="42px" // offset of the icon from the contact card
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
  </Container>
);

export default Contact;
