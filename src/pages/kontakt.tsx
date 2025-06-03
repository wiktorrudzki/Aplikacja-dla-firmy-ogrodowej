import { Box, Container, Flex, Stack, Text } from "@chakra-ui/react";
import {
  CallDescription,
  ContactCard,
  MailDescription,
  VisitDescription,
} from "@src/components/contact-card";
import { MainCard } from "@src/components/main-card";
import { t } from "@src/utils/i18n";
import React from "react";
import { BiPhone } from "react-icons/bi";
import { FiMail, FiMap } from "react-icons/fi";

const Contact = () => (
  <Container
    marginTop={{
      base: `${24 * 2 + 48}px`,
      md: `${24 * 2 + 96}px`,
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
          marginBottom="42px"
          textStyle={{ base: "heading-2", md: "heading-1" }}
          textTransform="uppercase"
          textAlign="center"
        >
          {t("Chcesz się z nami skontaktować?")}
        </Text>
        <Flex
          width="100%"
          wrap="wrap"
          margin="auto"
          justifyContent="space-between"
          gap={{
            base: 16,
            xl: 8,
          }}
          flexDirection={{
            base: "column",
            xl: "row",
          }}
          alignItems="center"
        >
          <ContactCard
            title={t("Odwiedź nas!")}
            description={<VisitDescription />}
            Icon={FiMap}
            iconMode="color"
          />
          <ContactCard
            title={t("Zadzwoń do nas!")}
            description={<CallDescription />}
            Icon={BiPhone}
            iconMode="fill"
          />
          <ContactCard
            title={t("Napisz do nas!")}
            description={<MailDescription />}
            Icon={FiMail}
            iconMode="color"
          />
        </Flex>
        <Box textAlign="center" bg="white" width="100%" height="300px">
          TODO - replace with a google map
        </Box>
      </Stack>
    </MainCard>
  </Container>
);

export default Contact;
