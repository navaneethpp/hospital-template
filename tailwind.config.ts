import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2C8C99",
          dark: "#247480",
          light: "#E6F4F6",
          muted: "#D4EEF1",
        },
        surface: {
          DEFAULT: "#F4FAFB",
          alt: "#E8F4F6",
        },
        ink: "#1A1F27",
        muted: "#6B7280",
        card: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 24px -8px rgba(28, 70, 82, 0.12)",
        lift: "0 16px 40px -12px rgba(28, 70, 82, 0.18)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
