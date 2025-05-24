import {
  Flex,
  Heading,
  VStack,
  Text,
  HStack,
  Link,
  Box,
} from "@chakra-ui/react";
import { MdLocationOn, MdMail, MdPhoneIphone } from "react-icons/md";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import React from "react";
import { t } from "@i18n";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Footer = () => {
  const { backgroundImage } = useStaticQuery(graphql`
    {
      backgroundImage: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "grass.jpg" }
      ) {
        ...GatsbyImageFragment
      }
    }
  `);

  const image = getImage(backgroundImage);

  return (
    <footer>
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        gap={20}
        px={20}
        py={70}
        color="white"
        style={{ position: "relative" }}
      >
        <GatsbyImage
          image={image!}
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
          <Heading textStyle="heading-3" fontWeight="bold">
            {t("contact-details")}
          </Heading>
          <HStack>
            <MdLocationOn size="1.5rem" />
            <Text whiteSpace="pre-line" textStyle="paragraph">
              {t("adress-details")}
            </Text>
          </HStack>
          <HStack>
            <MdMail size="1.5rem" />
            <Link
              href={`mailto:${t("email-address")}`}
              color="white"
              textStyle="paragraph"
            >
              {t("email-address")}
            </Link>
          </HStack>
          <HStack>
            <MdPhoneIphone size="1.5rem" />
            <Link
              href={`tel:${t("telephone-number")}`}
              textStyle="paragraph"
              color={"white"}
            >
              {t("telephone-number")}
            </Link>
          </HStack>
        </VStack>

        <VStack align="start">
          <Heading textStyle="heading-3" fontWeight="bold">
            {t("useful-links")}
          </Heading>
          <Link href="#" textStyle="paragraph" color="white">
            {t("homepage")}
          </Link>
          <Link href="#" textStyle="paragraph" color="white">
            {t("about-us")}
          </Link>
          <Link href="#" textStyle="paragraph" color="white">
            {t("gallery")}
          </Link>
          <Link href="#" textStyle="paragraph" color="white">
            {t("contact")}
          </Link>
          <Link href="#" textStyle="paragraph" color="white">
            {t("regulations")}
          </Link>
        </VStack>

        <VStack align="start">
          <Heading textStyle="heading-3" fontWeight="bold">
            {t("offer")}
          </Heading>
          <Link href="#" textStyle="paragraph" color="white">
            {t("for-companies")}
          </Link>
          <Link href="#" textStyle="paragraph" color="white">
            {t("for-individuals")}
          </Link>
        </VStack>

        <VStack align="start">
          <Heading textStyle="heading-3" fontWeight="bold">
            {t("our-social-media")}
          </Heading>
          <HStack>
            <Link href="#">
              <BsFacebook color="white" size="2rem" />
            </Link>
            <Link href="#">
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
        p={8}
      >
        {t("footer-copyright")}
      </Box>
    </footer>
  );
};

export default Footer;
