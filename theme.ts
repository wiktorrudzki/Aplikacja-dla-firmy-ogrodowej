import {
  createSystem,
  defaultBaseConfig,
  defineConfig,
} from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    textStyles: {
      "extra-large": {
        // TODO - add more text styles (it's just an example)
        description: "example",
        value: {
          fontFamily: "Anton",
          fontWeight: "400",
          fontSize: "60px",
          lineHeight: "auto",
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

export const system = createSystem(defaultBaseConfig, customConfig);
