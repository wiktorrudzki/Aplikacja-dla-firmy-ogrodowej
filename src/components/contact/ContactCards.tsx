import { Flex } from "@chakra-ui/react";
import React from "react";
import {
  CallDescription,
  ContactCard,
  MailDescription,
  VisitDescription,
} from "../contact-card";
import { t } from "@src/utils/i18n";
import { FiMail, FiMap } from "react-icons/fi";
import { BiPhone } from "react-icons/bi";

const ContactCards = () => (
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
);

export default ContactCards;
