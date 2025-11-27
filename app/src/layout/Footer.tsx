import React from "react";
import { Flex, HStack, Link, Box, Image } from "@chakra-ui/react";
import { MdLocationOn, MdMail, MdPhoneIphone } from "react-icons/md";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

import { t } from "@i18n";
import {
  FooterColumn,
  FooterContactDetail,
  FooterLink,
} from "@src/components/footer";
import { Heading3, Paragraph } from "@src/components/typography";
import { LINKS, ROUTES } from "@src/constants";
import logo from "@src/assets/icons/logo-white.svg";

const Footer = () => {
  return (
    <Box as="footer" bgColor="primary.500" color="white">
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        px={{ base: 5, md: 10, xl: 20 }}
        py={[20]}
        color="white"
      >
        <Flex
          gap={[16, 10]}
          direction={{ base: "column", md: "row" }}
          flexWrap="wrap"
        >
          <FooterColumn title={t("contact-details")}>
            <Heading3>{t("company-name")}</Heading3>
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
          </FooterColumn>

          <FooterColumn title={t("useful-links")}>
            <FooterLink to={ROUTES.HOME}>{t("homepage")}</FooterLink>
            <FooterLink to={ROUTES.O_NAS}>{t("about-us")}</FooterLink>
            <FooterLink to={ROUTES.GALERIA}>{t("gallery")}</FooterLink>
            <FooterLink to={ROUTES.KONTAKT}>{t("contact")}</FooterLink>
            <FooterLink to={ROUTES.POLITYKA_PRYWATNOSCI}>
              {t("policy-privacy")}
            </FooterLink>
          </FooterColumn>

          <FooterColumn title={t("offer")}>
            <FooterLink to={ROUTES.DLA_FIRM}>{t("for-companies")}</FooterLink>
            <FooterLink to={ROUTES.KLIENT_INDYWIDUALNY}>
              {t("for-individuals")}
            </FooterLink>
          </FooterColumn>
        </Flex>

        <FooterColumn alignItems="end" width="100%" maxW="sm">
          <Image src={logo} alt={t("company-name")} />
          <HStack gap="4">
            <Link
              href={LINKS.Facebook}
              target="_blank"
              aria-label={t("Kliknij, aby przejść do Facebooka")}
            >
              <FaFacebookSquare color="white" size="2rem" />
            </Link>
            <Link
              href={LINKS.Instagram}
              target="_blank"
              aria-label={t("Kliknij, aby przejść do Instagrama")}
            >
              <FaInstagram color="white" size="2rem" />
            </Link>
          </HStack>
        </FooterColumn>
      </Flex>

      <Box as="hr" borderColor={"primary.400"} mx="20" />

      <Paragraph textAlign="center" p={2} m={5}>
        {t("footer-copyright")}
      </Paragraph>
    </Box>
  );
};

export default Footer;
