/** @type {import('tailwindcss').Config} */
import variables from "./src/config/tailwind-variables-styled/configVariablesCss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ...variables,
    },
  },
  plugins: [],
};
