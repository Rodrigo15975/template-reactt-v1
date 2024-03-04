/** @type {import('tailwindcss').Config} */
import variables from "./src/config/tailwind-variables-styled/configVariablesCss";
import styled from "./src/config/tailwind-variables-styled/configStyledCss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ...variables,
      ...styled,
    },
  },
  plugins: [],
};
