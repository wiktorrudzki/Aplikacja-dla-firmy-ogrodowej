import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import { GatsbyPageWithLayout } from "@src/types/page";
import { SEO } from "@src/components/seo";
import { t } from "@src/utils/i18n";
import { NavigationMarginContainer } from "@src/components/navigation-margin-container";
import { Heading1, Paragraph } from "@src/components/typography";
import { HStack, Icon, Stack } from "@chakra-ui/react";
import { HiOutlineSearch } from "react-icons/hi";
import { BsArrowLeft } from "react-icons/bs";
import { ROUTES } from "@src/constants";

const NotFoundPage: GatsbyPageWithLayout<PageProps> = () => {
  return (
    <NavigationMarginContainer
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        maxWidth="4xl"
        textAlign={"center"}
        alignItems={"center"}
        gap="4"
        maxW="lg"
        my="24"
      >
        <Icon size="2xl" mb="4" color="green.500">
          <HiOutlineSearch />
        </Icon>
        <Heading1 color="green.500">{t("page-not-found")}</Heading1>
        <Paragraph>{t("page-not-found-description")}</Paragraph>
        <Link to={ROUTES.HOME} aria-label={t("homepage")}>
          <HStack>
            <BsArrowLeft />
            {t("homepage")}
          </HStack>
        </Link>
      </Stack>
    </NavigationMarginContainer>
  );
};

export default NotFoundPage;

export const Head: HeadFC = ({ location }) => (
  <SEO title={t("not-found")} path={location.pathname} />
);
