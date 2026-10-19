import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./animation/**/*.{js,ts,jsx,tsx,mdx}",
    "./container/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f1f1f1",
        secondary: "#212121",
        marquee: "#004d43",
        about: "#cdea68"
      },
    },
    fontFamily: {
      FoundersGrotesk: ["FoundersGrotesk", "sans-serif"],
      NeueMontreal: ["NeueMontreal", "sans-serif"],
    },
    screens: {
      xm: { raw: "(max-width: 400px), (max-device-width: 400px)" },
      sm: { raw: "(min-width: 401px) and (max-width: 768px), (min-device-width: 401px) and (max-device-width: 768px)" },
      md: { raw: "(min-width: 769px) and (min-device-width: 769px)" },
      lg: { raw: "(min-width: 1025px) and (max-width: 1490px) and (min-device-width: 769px)" },
      xl: { raw: "(min-width: 1491px) and (min-device-width: 769px)" },
    }
  },
  plugins: [],
};
export default config;
