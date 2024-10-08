import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-bg": "url('/img/bg.jpg')",
      },
      fontFamily: {
        roboto: ["var(--roboto)"],
      },
      borderRadius: {
        custom: "50px",
      },
      keyframes: {
        scroll: {
          "0%": { opacity: "0" },
          "10%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(15px)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
