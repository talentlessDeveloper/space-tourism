/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      body: "#0B0D17",
      heading: "#D0D6F9",
      white: "#FFFFFF",
      primary: "hsl(var(--color-primary) / 0.2)",
      secondary: "hsl(var(--color-secondary) / 0.4)",
      clrWhite: "hsl(var(--color-white) / 0.05)",
    },
    fontFamily: {
      belle: ["Bellefair", "sans-serif"],
      barlowC: ["Barlow Condensed", "sans-serif"],
      barlow: ["Barlow", "sans-serif"],
    },

    container: {
      md: "47.9375em",
      lg: "63.9375em",
    },
    extend: {
      spacing: {
        123: "7.6875rem",
        165: "10.3125rem",
        450: "28.125rem",
        830: "51.875rem",
      },
      dropShadow: {
        "2xl": "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
