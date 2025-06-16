import { Wrap } from "@chakra-ui/react";
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
import { Link } from "gatsby";

const ContactCards = () => (
  <Wrap
    width="100%"
    margin="auto"
    justifyContent="space-between"
    gap={{
      base: 16,
      xl: 8,
    }}
    alignItems="center"
  >
    <ContactCard
      title={t("Odwiedź nas!")}
      description={<VisitDescription />}
      Icon={FiMap}
      iconMode="color"
    />
    <Link style={{ margin: "0 auto" }} to={`tel:${t("telephone-number")}`}>
      <ContactCard
        title={t("Zadzwoń do nas!")}
        description={<CallDescription />}
        Icon={BiPhone}
        iconMode="fill"
      />
    </Link>
    <Link style={{ margin: "0 auto" }} to={`mailto:${t("email-address")}`}>
      <ContactCard
        title={t("Napisz do nas!")}
        description={<MailDescription />}
        Icon={FiMail}
        iconMode="color"
      />
    </Link>
  </Wrap>
);

export default ContactCards;
