import React from "react";
import { UncontrolledForm } from "../form";
import { SpotlightButton } from "../button";
import { t } from "@src/utils/i18n";
import { Box } from "@chakra-ui/react";
import { ContactFormInputs } from "@src/types/form";

const ContactForm = () => {
  const onFinish = (values: ContactFormInputs) => {};

  return (
    <UncontrolledForm
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
      onFinish={onFinish}
    >
      <Box display="flex" gap={8}>
        <UncontrolledForm.TextInput
          label={t("Imię")}
          name="firstName"
          placeholder={t("Twoje imię")}
        />
        <UncontrolledForm.TextInput
          label={t("Nazwisko")}
          name="secondName"
          placeholder={t("Twoje nazwisko")}
        />
      </Box>
      <UncontrolledForm.TextInput
        label={t("Numer telefonu")}
        required
        name="phoneNumber"
        type="tel"
        placeholder={t("Twój numer telefonu")}
      />
      <UncontrolledForm.TextInput
        label={t("Email")}
        required
        name="email"
        type="email"
        placeholder={t("Twój adres e-mail")}
      />
      <UncontrolledForm.TextInput
        label={t("Temat")}
        name="topic"
        placeholder={t("Temat Twojej wiadomości")}
      />
      <UncontrolledForm.TextArea
        label="Wiadomość"
        required
        name="message"
        placeholder={t("Twoja wiadomość")}
      />
      <SpotlightButton
        size="xl"
        type="submit"
        style={{ width: "33%", marginLeft: "auto" }}
      >
        {t("Wyślij")}
      </SpotlightButton>
    </UncontrolledForm>
  );
};

export default ContactForm;
