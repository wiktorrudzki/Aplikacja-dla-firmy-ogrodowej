import CookieConsent from "react-cookie-consent";
import React from "react";
import { t } from "@src/utils/i18n";
import { Link } from "gatsby";
import { ROUTES } from "@src/constants";
import { useToken } from "@chakra-ui/react";
import { Paragraph } from "../typography";

const CookiesModal = () => {
  const [spacing2, spacing4] = useToken("spacing", ["2", "4"]);
  const [primary, white] = useToken("colors", ["primary.500", "white"]);

  return (
    <CookieConsent
      buttonStyle={{
        color: white,
        backgroundColor: primary,
        paddingBlock: spacing2,
        paddingInline: spacing4,
        border: "none",
        borderRadius: spacing4,
      }}
      buttonText={t("Rozumiem")}
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      cookieName="CookieConsentV2"
    >
      <Paragraph>
        {t(
          "Korzystamy z plików cookies. Pozwalają nam one tworzyć anonimowe statystyki serwisu.",
        )}
        <Link
          style={{ textDecoration: "underline", marginLeft: 4 }}
          to={ROUTES.POLITYKA_PRYWATNOSCI}
        >
          {t("Przeczytaj politykę prywatności")}
        </Link>
      </Paragraph>
    </CookieConsent>
  );
};

export default CookiesModal;
