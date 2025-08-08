import React from "react";
import { Heading2 } from "@src/components/typography";
import { ImageJsonNode, ServiceNode } from "@src/types/graphql";
import { GatsbyImage } from "gatsby-plugin-image";
import { t } from "@i18n";
import { MainContainerWithBreadcrumbs } from "@src/components/main-container";
import { Link } from "gatsby";
import { FiArrowLeft } from "react-icons/fi";
import { BreadcrumbLink, Flex, Grid, GridItem } from "@chakra-ui/react";
import { ROUTES } from "@src/constants";
import { MdxCustomProvider } from "@src/components/mdx";
import "swiper/css";
import { getImageJsonImage } from "@src/helpers";

type Props = {
  pageContext: ServiceNode<
    "id" | "imageJson" | "imageJsons" | "iconMapKey" | "title",
    ImageJsonNode<"id" | "altKey" | "childImageSharp">
  >;
  uri: string;
  children: React.ReactNode;
};

const ServicePageTemplate = ({ pageContext, children, uri }: Props) => {
  const { title, imageJsons } = pageContext;

  const segments = uri
    .split("/")
    .filter((s) => s)
    .map((s) => `/${s}`);

  const breadcrumbs = [
    <Link to={segments[0]} key="link">
      {segments[0] === ROUTES.DLA_FIRM
        ? t("business-client")
        : t("individual-client")}
    </Link>,
    <BreadcrumbLink key="breadcrumb">{title}</BreadcrumbLink>,
  ];

  return (
    <MainContainerWithBreadcrumbs breadcrumbs={breadcrumbs}>
      <Flex pb={{ base: 4, lg: 6 }} gap={4} align="center">
        <Link aria-label={t("Klinkij, aby wrócić")} to={segments[0]}>
          <FiArrowLeft size={32} />
        </Link>
        <Heading2 fontWeight={500}>{title}</Heading2>
      </Flex>
      <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap={6}>
        <GridItem>
          <MdxCustomProvider>{children}</MdxCustomProvider>
        </GridItem>
        <GridItem>
          {imageJsons.map((image) => (
            <GatsbyImage
              key={image.altKey}
              style={{ borderRadius: 16 }}
              image={getImageJsonImage(image)}
              alt={t(image.altKey)}
            />
          ))}
        </GridItem>
      </Grid>
    </MainContainerWithBreadcrumbs>
  );
};

export default ServicePageTemplate;
