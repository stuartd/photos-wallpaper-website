import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17181c",
        paper: "#f5f6f8",
        pine: "#1f4f63",
        fern: "#2f6f6a",
        sun: "#f5c542",
        clay: "#b85c38",
        line: "#d9dde5",
        panel: "#ffffff",
        mist: "#edf1f5"
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Text",
          "Segoe UI",
          "system-ui",
          "sans-serif"
        ],
        display: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "Segoe UI",
          "system-ui",
          "sans-serif"
        ]
      },
      boxShadow: {
        soft: "0 22px 70px rgba(23, 24, 28, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
