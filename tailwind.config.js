import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Roboto Flex"', ...defaultTheme.fontFamily.sans],
      mono: ['"Roboto Mono"', ...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [],
};
