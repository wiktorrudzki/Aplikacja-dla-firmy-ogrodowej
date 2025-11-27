import React from "react";
import { Heading2 } from "@src/components/typography";
import { ImageJsonNode, ServiceNode } from "@src/types/graphql";
import { GatsbyImage } from "gatsby-plugin-image";
import { t } from "@i18n";
import { MainContainerWithBreadcrumbs } from "@src/components/main-container";
import { HeadFC, Link } from "gatsby";
import { FiArrowLeft } from "react-icons/fi";
import { Box, BreadcrumbLink, Flex, Grid, GridItem } from "@chakra-ui/react";
import { ROUTES } from "@src/constants";
import { MdxCustomProvider } from "@src/components/mdx";
import { getImageJsonImage } from "@src/helpers";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "./Service.css";
import { SEO } from "@src/components/seo";

type PageContext = ServiceNode<
  "id" | "imageJson" | "imageJsons" | "iconMapKey" | "title",
  ImageJsonNode<"id" | "altKey" | "childImageSharp">
>;

type Props = {
  pageContext: PageContext;
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
    <MainContainerWithBreadcrumbs
      withBackground={true}
      breadcrumbs={breadcrumbs}
    >
      <Flex pb={{ base: 4, lg: 6 }} gap={4} align="center">
        <Link aria-label={t("Klinkij, aby wrócić")} to={segments[0]}>
          <FiArrowLeft size={32} />
        </Link>
        <Heading2 fontWeight={500}>{title}</Heading2>
      </Flex>
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={6}>
        <GridItem>
          <MdxCustomProvider>{children}</MdxCustomProvider>
        </GridItem>
        <GridItem w="100%" minW="0">
          <Box w="full">
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={16}
              autoplay={{ delay: 6000 }}
              pagination={{
                type: "bullets",
                clickable: true,
              }}
              className="service-images-swiper"
            >
              {imageJsons.map((image) => (
                <SwiperSlide key={image.altKey}>
                  <GatsbyImage
                    style={{
                      borderRadius: 16,
                      maxHeight: "30rem",
                    }}
                    image={getImageJsonImage(image)}
                    alt={t(image.altKey)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </GridItem>
      </Grid>
    </MainContainerWithBreadcrumbs>
  );
};

export default ServicePageTemplate;

export const Head: HeadFC<string, PageContext> = ({
  location,
  pageContext,
}) => <SEO title={t(pageContext.title)} path={location.pathname} />;
