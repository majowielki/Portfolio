/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        text: "rgb(var(--text-color) / <alpha-value>)",
        bg: "rgb(var(--bg-color) / <alpha-value>)",
        sec: "rgb(var(--second-bg-color) / <alpha-value>)",
        main: "rgb(var(--main-color) / <alpha-value>)",
        other: "rgb(var(--other-color) / <alpha-value>)",
      },
    },
  },
  plugins: [],
}