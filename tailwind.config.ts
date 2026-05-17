import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#121417",
        paper: "#f7f4ec",
        pine: "#173f35",
        fern: "#2f6f5e",
        sun: "#f0b35b",
        clay: "#b95f43"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(18, 20, 23, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
