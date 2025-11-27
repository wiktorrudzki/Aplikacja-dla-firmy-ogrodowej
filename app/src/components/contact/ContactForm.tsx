import React from "react";
import { Form } from "../form";
import { SpotlightButton } from "../button";
import { t } from "@src/utils/i18n";
import { Box } from "@chakra-ui/react";

const ContactForm = () => {
  return (
    <Form
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
      onFinish={() => {}}
    >
      <Box display="flex" gap={8}>
        <Form.TextInput
          label={t("Imię")}
          name="firstName"
          placeholder={t("Twoje imię")}
        />
        <Form.TextInput
          label={t("Nazwisko")}
          name="secondName"
          placeholder={t("Twoje nazwisko")}
        />
      </Box>
      <Form.TextInput
        label={t("Numer telefonu")}
        required
        name="phoneNumber"
        placeholder={t("Twój numer telefonu")}
      />
      <Form.TextInput
        label={t("Email")}
        required
        name="email"
        type="email"
        placeholder={t("Twój adres e-mail")}
      />
      <Form.TextInput
        label={t("Temat")}
        name="topic"
        placeholder={t("Temat Twojej wiadomości")}
      />
      <Form.TextArea
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
    </Form>
  );
};

export default ContactForm;
