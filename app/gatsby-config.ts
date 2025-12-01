import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Usługi Ogrodnicze Mateusz Bernacki`,
    description: `Jesteśmy profesjonalną firmą ogrodniczą realizującą kompleksowe usługi związane z zakładaniem i pielęgnacją ogrodów.`,
    author: "Mateusz Bernacki",
    keywords:
      "usługi ogrodnicze,ogrodnik,zakładanie ogrodów,pielęgnacja ogrodów,ogrody,tarasy,trawniki,Mateusz Bernacki,Rybnik,ogrody Rybnik",
    image: `/siteimage.jpg`,
    siteUrl: `https://ogrody.rybnik.pl/`,
  },
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-plugin-google-gtag",
      options: { trackingIds: ["G-9L6NM1N9QR"] },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          formats: ["auto", "webp", "avif"],
          placeholder: "blurred",
        },
      },
    },
    {
      resolve: "gatsby-transformer-json",
      options: {
        // Force all gallery JSON (including nested) into one type so GraphQL exposes every node
        typeName: ({ node }) =>
          node.relativeDirectory.startsWith("gallery")
            ? "GalleryJson"
            : "ImageJson",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "services",
        path: `./src/content/services/`,
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: "./src/content/",
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
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
