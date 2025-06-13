import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Usługi Ogrodnicze Mateusz Bernacki`,
    description: `Jesteśmy profesjonalną firmą ogrodniczą realizującą kompleksowe usługi związane z zakładaniem i pielęgnacją ogrodów.`,
    author: "Mateusz Bernacki",
    keywords:
      "usługi ogrodnicze,ogrodnik,zakładanie ogrodów,pielęgnacja ogrodów",
    image: `/siteimage.jpg`,
    siteUrl: `https://www.ogrody.rybnik.pl/`,
  },
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-mdx`,
    { resolve: "gatsby-plugin-google-gtag", options: { trackingIds: [] } },
    "gatsby-plugin-image",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `./src/content/`,
      },
      __key: "content",
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@data": "src/data",
          "@layouts": "src/layouts",
          "@pages": "src/pages",
          "@graphql": "src/graphql",
          "@contexts": "src/contexts",
          "@theme": "./theme.ts",
          "@i18n": "src/utils/i18n.ts",
          "@hooks": "src/hooks",
        },
        extensions: ["ts", "tsx"],
      },
    },
  ],
};

export default config;
