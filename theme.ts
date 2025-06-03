import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    semanticTokens: {
      shadows: {
        based: {
          value: "0px 1px 3px rgba(0, 0, 0, 0.1)",
        },
        element: {
          value: "0px 0px 16px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    textStyles: {
      "extra-large": {
        value: {
          fontFamily: "Nunito",
          fontWeight: "400",
          fontSize: "60px",
          lineHeight: "normal",
        },
      },
      "heading-1": {
        value: {
          fontFamily: "Poppins",
          fontWeight: "400",
          fontSize: "36px",
          lineHeight: "normal",
        },
      },
      "heading-2": {
        value: {
          fontFamily: "Poppins",
          fontWeight: "500",
          fontSize: "24px",
          lineHeight: "normal",
        },
      },
      "heading-3": {
        value: {
          fontFamily: "Inter",
          fontWeight: "400",
          fontSize: "20px",
          lineHeight: "normal",
        },
      },
      paragraph: {
        value: {
          fontFamily: "Amiko",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "normal",
        },
      },
      "extra-extra-large": {
        value: {
          fontFamily: "Anton",
          fontWeight: "400",
          fontSize: "96px",
          lineHeight: "normal",
        },
      },
    },
    tokens: {
      colors: {
        green: {
          50: { value: "#EBF4E4" },
          100: { value: "#D4E7C5" },
          200: { value: "#C5DFB1" },
          300: { value: "#A8CF8A" },
          400: { value: "#8BBF63" },
          500: { description: "Primary color", value: "#6EAF3C" },
          600: { value: "#588C30" },
          700: { value: "#426924" },
          800: { value: "#2C4618" },
          900: { value: "#16230C" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
