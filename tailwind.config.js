/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 4px 15px 20px rgba(0, 0, 0, 0.03)",
      },
      colors: {
        "hd-yellow": "#FFE414",
        "chargin-green": "#09DD6D",
      },
      screens: {
        xxs: "300px",
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "2000px",
      },
    },
  },
  variants: {
    outline: ["focus"],
    textColor: ["hover"],
  },
  plugins: [],
  // // eslint-disable-next-line no-undef
  // plugins: [require("tw-elements/dist/plugin"), require("@tailwindcss/forms")],
};
