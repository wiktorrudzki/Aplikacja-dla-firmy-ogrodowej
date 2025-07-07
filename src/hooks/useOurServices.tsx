import { ROUTES } from "@src/constants";
import { OurService } from "@src/types/services";
import { t } from "@src/utils/i18n";
import { StaticImage } from "gatsby-plugin-image";
import React, { useMemo } from "react";

const useOurServices = (className?: string) => {
  const services: OurService[] = useMemo(
    () => [
      {
        title: t("individual-client"),
        aboutDescription: t("individual-client-about"),
        homeDescription: t("individual-client-homepage"),
        route: ROUTES.KLIENT_INDYWIDUALNY,
        image: (
          <StaticImage
            src="../assets/images/house.jpg"
            alt="Nowoczesny wieżowiec"
            loading="eager"
            className={className}
          />
        ),
      },
      {
        title: t("business-client"),
        aboutDescription: t("individual-client-about"),
        homeDescription: t("business-client-homepage"),
        route: ROUTES.DLA_FIRM,
        image: (
          <StaticImage
            src="../assets/images/skyscraper.jpg"
            alt="Dom z tarasem oraz częścią ogrodu"
            loading="eager"
            className={className}
          />
        ),
      },
    ],
    [className],
  );

  return services;
};

export default useOurServices;
