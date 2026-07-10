import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design tokens from the handoff
        ink: "#131313",
        accent: "#ff751f",
        cream: "#faf9f6", // warm off-white section bg
        border: {
          DEFAULT: "#e6e3dc",
          light: "#ececE6", // hairline divider
          strong: "#d9d5cc",
          input: "#e0ddd4",
        },
        muted: {
          DEFAULT: "#55554f", // body text muted
          soft: "#6b6b66", // secondary muted
          faint: "#9a9a93", // label grey
          extra: "#b4b2aa", // extra light
        },
        // Dark-section palette
        dark: {
          bg: "#131313",
          card: "#1d1d1b",
          border: "#2c2c2a",
          text: "#c8c6be",
          soft: "#a4a39b",
          label: "#8a8a83",
        },
        // Neutral placeholder
        placeholder: {
          bg: "#ebe8e1",
          soft: "#f2f0ea",
          panel: "#f7f5f0",
        },
      },
      fontFamily: {
        // CSS variables are provided by next/font/google in app/layout.tsx
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        container: "1320px",
      },
      spacing: {
        gutter: "56px",
      },
      keyframes: {
        tbUp: {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-50%)" },
        },
        tbDown: {
          from: { transform: "translateY(-50%)" },
          to: { transform: "translateY(0)" },
        },
        tbMarquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        tbDraw: {
          from: { strokeDashoffset: "16" },
          to: { strokeDashoffset: "0" },
        },
        tbBlink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".15" },
        },
        tbSearch: {
          "0%": { transform: "translate(0,0)" },
          "25%": { transform: "translate(2px,-2px)" },
          "50%": { transform: "translate(3px,1.5px)" },
          "75%": { transform: "translate(-1.5px,2px)" },
          "100%": { transform: "translate(0,0)" },
        },
        tbSpin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        tbPulse: {
          "0%, 100%": { opacity: ".25" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "tb-up": "tbUp 34s linear infinite",
        "tb-down": "tbDown 34s linear infinite",
        "tb-marquee": "tbMarquee 45s linear infinite",
        "tb-draw": "tbDraw 2.2s ease-in-out infinite alternate",
        "tb-blink": "tbBlink 1.5s ease-in-out infinite",
        "tb-search": "tbSearch 3s ease-in-out infinite",
        "tb-spin": "tbSpin 7s linear infinite",
        "tb-pulse": "tbPulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
