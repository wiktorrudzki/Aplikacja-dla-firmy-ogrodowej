import {
  CallDescription,
  ContactCard,
  MailDescription,
  VisitDescription,
} from "@src/components/contact-card";
import { t } from "@src/utils/i18n";
import React from "react";
import { BiPhone } from "react-icons/bi";
import { FiMail, FiMap } from "react-icons/fi";

const Contact = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "lightgreen",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
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
    </div>
  );
};

export default Contact;
