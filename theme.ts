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
        mainCard: {
          50: { value: "#EBF8FF" },
          100: { value: "#EBF4E4" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
