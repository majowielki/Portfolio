/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        text: "rgb(var(--text-color) / <alpha-value>)",
        bg: "rgb(var(--bg-color) / <alpha-value>)",
        sec: "rgb(var(--second-bg-color) / <alpha-value>)",
        card: "rgb(var(--card-color) / <alpha-value>)",
        main: "rgb(var(--main-color) / <alpha-value>)",
        other: "rgb(var(--other-color) / <alpha-value>)",
        line: "rgb(var(--line-color) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ['"JetBrains Mono Variable"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      spacing: {
        header: "var(--header-h)",
        stroke: "var(--stroke)",
      },
      borderWidth: {
        stroke: "var(--stroke)",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translate3d(0, 24px, 0)" },
          to: { opacity: "1", transform: "none" },
        },
        "line-up": {
          from: { transform: "translate3d(0, 105%, 0)" },
          to: { transform: "none" },
        },
        "grow-y": {
          from: { transform: "scaleY(0)" },
          to: { transform: "none" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "100%": { transform: "scale(2.6)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 1s cubic-bezier(0.16, 1, 0.3, 1) both",
        "line-up": "line-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) both",
        "grow-y": "grow-y 1.4s cubic-bezier(0.16, 1, 0.3, 1) both",
        "pulse-ring": "pulse-ring 1.8s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [],
};
