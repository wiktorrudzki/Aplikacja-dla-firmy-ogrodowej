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
        miniSlider: {
          value: "0px 0px 32px 8px rgba(0,0,0,0.5)",
        },
      },
      colors: {
        midnightGreen: {
          solid: { value: "{colors.midnightGreen.500}" },
          contrast: { value: "{colors.white}" },
          fg: { value: "{colors.midnightGreen.700}" },
          muted: { value: "{colors.midnightGreen.100}" },
          subtle: { value: "{colors.midnightGreen.200}" },
          emphasized: { value: "{colors.midnightGreen.300}" },
          focusRing: { value: "{colors.midnightGreen.500}" },
        },
      },
    },
    tokens: {
      fonts: {
        "extra-extra-large": {
          value: `Anton , -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`,
        },
        "extra-large": {
          value: `Nunito, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`,
        },
        heading: {
          value: `Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`,
        },
        body: {
          value: `Amiko, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`,
        },
      },
      colors: {
        midnightGreen: {
          50: { value: "#e6edee" },
          100: { value: "#cddbdc" },
          200: { value: "#9cb7b9" },
          300: { value: "#6a9497" },
          400: { value: "#397074" },
          500: { description: "Primary color", value: "#074C51" },
          600: { value: "#063d41" },
          700: { value: "#042e31" },
          800: { value: "#031e20" },
          900: { value: "#010f10" },
        },
        oceanGreen: {
          50: { value: "#eef8f3" },
          100: { value: "#def1e7" },
          200: { value: "#bce2cf" },
          300: { value: "#9bd4b8" },
          400: { value: "#79c5a0" },
          500: { description: "Secondary color", value: "#58B788" },
          600: { value: "#46926d" },
          700: { value: "#356e52" },
          800: { value: "#234936" },
          900: { value: "#12251b" },
        },
        mainCard: {
          50: { value: "#EBF8FF" },
          100: { value: "#EBF4E4" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
