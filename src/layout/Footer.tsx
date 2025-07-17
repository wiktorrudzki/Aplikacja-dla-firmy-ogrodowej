import React from "react";
import { Flex, VStack, HStack, Link } from "@chakra-ui/react";
import { MdLocationOn, MdMail, MdPhoneIphone } from "react-icons/md";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { t } from "@i18n";
import { FooterContactDetail, FooterLink } from "@src/components/footer";
import { Heading2, Paragraph } from "@src/components/typography";
import { ROUTES } from "@src/constants";
import grass from "../assets/images/grass.jpg";

const Footer = () => {
  return (
    <footer>
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        gap={[10, 5]}
        px={[5, 20]}
        py={[20, 70]}
        color="white"
        style={{ position: "relative" }}
      >
        <img
          src={grass}
          alt="Wiosenna, zielona trawa"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: -1,
            top: 0,
            left: 0,
          }}
        />
        <VStack align="start">
          <Heading2 fontWeight={600}>{t("contact-details")}</Heading2>
          <FooterContactDetail icon={MdLocationOn}>
            {t("adress-details")}
          </FooterContactDetail>
          <FooterContactDetail icon={MdMail}>
            <Link
              aria-label={t("Napisz maila")}
              href={`mailto:${t("email-address")}`}
              color="white"
            >
              {t("email-address")}
            </Link>
          </FooterContactDetail>
          <FooterContactDetail icon={MdPhoneIphone}>
            <Link
              aria-label={t("Zadzwoń")}
              href={`tel:${t("telephone-number")}`}
              color="white"
            >
              {t("telephone-number")}
            </Link>
          </FooterContactDetail>
        </VStack>

        <VStack align="start">
          <Heading2 fontWeight={600}>{t("useful-links")}</Heading2>
          <FooterLink to={ROUTES.HOME}>{t("homepage")}</FooterLink>
          <FooterLink to={ROUTES.O_NAS}>{t("about-us")}</FooterLink>
          <FooterLink to={ROUTES.GALERIA}>{t("gallery")}</FooterLink>
          <FooterLink to={ROUTES.KONTAKT}>{t("contact")}</FooterLink>
          <FooterLink to={ROUTES.POLITYKA_PRYWATNOSCI}>
            {t("policy-privacy")}
          </FooterLink>
        </VStack>

        <VStack align="start">
          <Heading2 fontWeight={600}>{t("offer")}</Heading2>
          <FooterLink to={ROUTES.DLA_FIRM}>{t("for-companies")}</FooterLink>
          <FooterLink to={ROUTES.KLIENT_INDYWIDUALNY}>
            {t("for-individuals")}
          </FooterLink>
        </VStack>

        <VStack align="start">
          <Heading2 fontWeight={600}>{t("our-social-media")}</Heading2>
          <HStack>
            <Link
              aria-label={t("Kliknij, aby przejść do Facebooka")}
              href="https://www.facebook.com/"
            >
              <BsFacebook color="white" size="2rem" />
            </Link>
            <Link
              aria-label={t("Kliknij, aby przejść do Instagrama")}
              href="https://www.instagram.com/"
            >
              <BsInstagram color="white" size="2rem" />
            </Link>
          </HStack>
        </VStack>
      </Flex>

      <Paragraph color="white" bgColor="green.500" textAlign="center" p={2}>
        {t("footer-copyright")}
      </Paragraph>
    </footer>
  );
};

export default Footer;
