import React from "react";
import { UncontrolledForm } from "../form";
import { SpotlightButton } from "../button";
import { t } from "@src/utils/i18n";
import { Box } from "@chakra-ui/react";
import { ContactFormInputs, ContactFromResponse } from "@src/types/form";
import { RadialBackgroundContainer } from "../radial-background-container";
import { useWithLoader } from "@src/hooks";
import { toaster } from "../ui/toaster";

const CONTACT_FORM_API = process.env.GATSBY_CONTACT_FORM_API;

const ContactForm = () => {
  const [onFinish, isLoading] = useWithLoader(
    async (values: ContactFormInputs) => {
      if (!CONTACT_FORM_API) return;

      await fetch(CONTACT_FORM_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: globalThis.location.origin,
        },
        body: JSON.stringify(values),
      })
        .then((res: Response) => res.json())
        .then(
          (data: ContactFromResponse) =>
            data.success &&
            toaster.create({
              title: t("Sukces!"),
              description: t("Twoja wiadomość została wysłana."),
            }),
        )
        .catch((err) => console.error(err));
    },
  );

  return (
    <UncontrolledForm
      style={{
        width: "100%",
      }}
      onFinish={onFinish}
    >
      <RadialBackgroundContainer
        gap={4}
        width="100%"
        display="flex"
        flexDirection="column"
        py={8}
        gradientWidth="75%"
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
        <UncontrolledForm.PhoneInput
          required
          label={t("Numer telefonu")}
          name="phoneNumber"
          placeholder={t("Twój numer telefonu")}
        />
        <UncontrolledForm.EmailInput
          required
          label={t("Email")}
          name="email"
          placeholder={t("Twój adres e-mail")}
        />
        <UncontrolledForm.TextInput
          label={t("Temat")}
          name="topic"
          placeholder={t("Temat Twojej wiadomości")}
        />
        <UncontrolledForm.TextArea
          required
          label="Wiadomość"
          name="message"
          placeholder={t("Twoja wiadomość")}
        />
        <SpotlightButton
          isLoading={isLoading}
          size="xl"
          type="submit"
          style={{ width: "33%", marginLeft: "auto" }}
        >
          {t("Wyślij")}
        </SpotlightButton>
      </RadialBackgroundContainer>
    </UncontrolledForm>
  );
};

export default ContactForm;
