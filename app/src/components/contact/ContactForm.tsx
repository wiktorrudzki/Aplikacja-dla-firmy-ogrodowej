import React, { useState } from "react";
import { UncontrolledForm } from "../form";
import { SpotlightButton } from "../button";
import { t } from "@src/utils/i18n";
import { Box, Link as ChakraLink, Flex } from "@chakra-ui/react";
import { ContactFormInputs, ContactFromResponse } from "@src/types/form";
import { RadialBackgroundContainer } from "../radial-background-container";
import { useWithLoader } from "@src/hooks";
import { Alert } from "../alert";
import { Recaptcha } from "../recaptcha";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "gatsby";
import { ROUTES } from "@src/constants";

const CONTACT_FORM_API = process.env.GATSBY_CONTACT_FORM_API;

const ContactForm = () => {
  const [response, setResponse] = useState<ContactFromResponse | null>(null);

  const captchaRef = React.useRef<ReCAPTCHA>(null);

  const [onFinish, isLoading] = useWithLoader(
    async (values: ContactFormInputs) => {
      if (!CONTACT_FORM_API) return;

      const token = captchaRef?.current?.getValue();
      captchaRef?.current?.reset();

      await fetch(CONTACT_FORM_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: globalThis.location.origin,
        },
        body: JSON.stringify({ ...values, token }),
      })
        .then((res: Response) => res.json())
        .then(setResponse)
        .catch(() =>
          setResponse({
            success: false,
            message: t("Wystąpił niespodziewany błąd"),
          }),
        );
    },
  );

  return (
    <UncontrolledForm
      style={{
        width: "100%",
      }}
      onFinish={onFinish}
    >
      <Flex
        gap={4}
        width="100%"
        flexDirection="column"
        p={8}
        borderRadius={32}
        boxShadow="2xl"
        bg="white"
      >
        <Flex gap={8}>
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
        </Flex>
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
        <UncontrolledForm.CheckboxInput required name="agreement">
          {t("Zaakceptuj")}{" "}
          <ChakraLink textDecorationColor="primary.500" asChild>
            <Link to={ROUTES.POLITYKA_PRYWATNOSCI}>
              {t("Politykę Prywatności")}
            </Link>
          </ChakraLink>
        </UncontrolledForm.CheckboxInput>

        <Recaptcha ref={captchaRef} />

        {!response?.success && (
          <SpotlightButton
            isLoading={isLoading}
            size="xl"
            type="submit"
            style={{ width: "33%", marginLeft: "auto" }}
          >
            {t("Wyślij")}
          </SpotlightButton>
        )}
        {response != null && (
          <Alert
            status={response.success ? "success" : "error"}
            title={response.success ? t("Udało się!") : response.message}
            message={
              response.success
                ? t("Twoja wiadomość została wysłana.")
                : response.message
            }
          />
        )}
      </Flex>
    </UncontrolledForm>
  );
};

export default ContactForm;
