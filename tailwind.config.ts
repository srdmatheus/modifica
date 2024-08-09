import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.css"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        border: {
          DEFAULT: "rgb(var(--border))"
        },
        background: {
          DEFAULT: "rgb(var(--background))"
        },
        foreground: {
          DEFAULT: "rgb(var(--foreground))",
          muted: "rgb(var(--foreground-muted))"
        },
        primary: {
          DEFAULT: "rgb(var(--primary))"
        }
      },
      fontFamily: {
        sans: ["var(--font-poppins)", ...fontFamily.sans],
        heading: ["var(--font-bricolage)", ...fontFamily.sans]
      }
    }
  },
  plugins: []
};
export default config;
