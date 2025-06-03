import React from "react";
import { Flex, Heading, VStack, HStack, Box, Link } from "@chakra-ui/react";
import { MdLocationOn, MdMail, MdPhoneIphone } from "react-icons/md";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import routes from "@data/routes.json";
import { t } from "@i18n";
import { StaticImage } from "gatsby-plugin-image";
import { FooterContactDetail, FooterLink } from "@src/components/footer";

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
        <StaticImage
          src="../assets/images/grass.jpg"
          alt="Tło trawy"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: -1,
            top: 0,
            left: 0,
          }}
        />
        <VStack align="start">
          <Heading textStyle="heading-2" fontWeight="bold">
            {t("contact-details")}
          </Heading>
          <FooterContactDetail icon={MdLocationOn}>
            {t("adress-details")}
          </FooterContactDetail>
          <FooterContactDetail icon={MdMail}>
            <Link
              href={`mailto:${t("email-address")}`}
              textStyle="paragraph"
              color="white"
            >
              {t("email-address")}
            </Link>
          </FooterContactDetail>
          <FooterContactDetail icon={MdPhoneIphone}>
            <Link
              href={`tel:${t("telephone-number")}`}
              textStyle="paragraph"
              color="white"
            >
              {t("telephone-number")}
            </Link>
          </FooterContactDetail>
        </VStack>

        <VStack align="start">
          <Heading textStyle="heading-2" fontWeight="bold">
            {t("useful-links")}
          </Heading>
          <FooterLink to={routes.HOME}>{t("homepage")}</FooterLink>
          <FooterLink to={routes.O_NAS}>{t("about-us")}</FooterLink>
          <FooterLink to={routes.GALERIA}>{t("gallery")}</FooterLink>
          <FooterLink to={routes.KONTAKT}>{t("contact")}</FooterLink>
          <FooterLink to={routes.REGULAMIN}>{t("regulations")}</FooterLink>
        </VStack>

        <VStack align="start">
          <Heading textStyle="heading-2" fontWeight="bold">
            {t("offer")}
          </Heading>
          <FooterLink to={routes.DLA_FIRM}>{t("for-companies")}</FooterLink>
          <FooterLink to={routes.KLIENT_INDYWIDUALNY}>
            {t("for-individuals")}
          </FooterLink>
        </VStack>

        <VStack align="start">
          <Heading textStyle="heading-2" fontWeight="bold">
            {t("our-social-media")}
          </Heading>
          <HStack>
            <Link href="https://www.facebook.com/">
              <BsFacebook color="white" size="2rem" />
            </Link>
            <Link href="https://www.instagram.com/">
              <BsInstagram color="white" size="2rem" />
            </Link>
          </HStack>
        </VStack>
      </Flex>

      <Box
        color="white"
        bgColor="green.500"
        textAlign="center"
        textStyle="paragraph"
        p={2}
      >
        {t("footer-copyright")}
      </Box>
    </footer>
  );
};

export default Footer;
