/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "gray-fluff": "gray-fluff 5s ease infinite",
        "amethyst-midnight": "amethyst-midnight 30s ease infinite",
        "float": "float 1s infinite",
      },
      keyframes: {
        "gray-fluff": {
          "0%": {
            "background-size": "100% 100%",
            "background-position": "left top",
            "background-image":
              "linear-gradient(to bottom right, rgba(96, 96, 96, 0.8), rgba(0, 0, 0, 0.8))",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right bottom",
            "background-image":
              "linear-gradient(to bottom right, rgba(96, 96, 96, 0.8), rgba(0, 0, 0, 0.8))",
          },
          "100%": {
            "background-size": "100% 100%",
            "background-position": "left top",
            "background-image":
              "linear-gradient(to bottom right, rgba(96, 96, 96, 0.8), rgba(0, 0, 0, 0.8))",
          },
        },
        "amethyst-midnight": {
          "0%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #3a006b 0, #6c0098 100%), linear-gradient(-100deg, #9c00ff 70%, #7500c4 100%), linear-gradient(200deg, #4c4c4c 0, #9300ff 100%), linear-gradient(-3deg, #6c0098 0, #3a006b 50%)",
            backgroundSize: "100% 100%",
            backgroundPosition: "0% 60%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "20%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #3a006b 0, #6c0098 100%), linear-gradient(-100deg, #9c00ff 70%, #7500c4 100%), linear-gradient(200deg, #4c4c4c 0, #9300ff 100%), linear-gradient(-3deg, #6c0098 0, #3a006b 50%)",
            backgroundSize: "105% 105%",
            backgroundPosition: "10% 50%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "40%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #3a006b 0, #6c0098 100%), linear-gradient(-100deg, #9c00ff 70%, #7500c4 100%), linear-gradient(200deg, #4c4c4c 0, #9300ff 100%), linear-gradient(-3deg, #6c0098 0, #3a006b 50%)",
            backgroundSize: "110% 300%",
            backgroundPosition: "20% 40%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "60%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #3a006b 0, #6c0098 100%), linear-gradient(-100deg, #9c00ff 70%, #7500c4 100%), linear-gradient(200deg, #4c4c4c 0, #9300ff 100%), linear-gradient(-3deg, #6c0098 0, #3a006b 50%)",
            backgroundSize: "115% 115%",
            backgroundPosition: "30% 30%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "80%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #3a006b 0, #6c0098 100%), linear-gradient(-100deg, #9c00ff 70%, #7500c4 100%), linear-gradient(200deg, #4c4c4c 0, #9300ff 100%), linear-gradient(-3deg, #6c0098 0, #3a006b 50%)",
            backgroundSize: "250% 120%",
            backgroundPosition: "40% 20%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
          "100%": {
            background:
              "radial-gradient(100% 225% at 0 100%, #3a006b 0, #6c0098 100%), linear-gradient(-100deg, #9c00ff 70%, #7500c4 100%), linear-gradient(200deg, #4c4c4c 0, #9300ff 100%), linear-gradient(-3deg, #6c0098 0, #3a006b 50%)",
            backgroundSize: "100% 100%",
            backgroundPosition: "0% 60%",
            backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
          },
        },
        "float": {
          "0%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(-5px)" },
          "50%": { transform: "translateY(0)" },
          "75%": { transform: "translateY(5px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "xs": ".75rem",
        "sm": ".875rem",
        "tiny": ".875rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
        // Custom sizes
        "custom-sm": "0.9375rem", // 15px
        "custom-base": "1.0625rem", // 17px
        "custom-lg": "1.375rem", // 22px
        "custom-xl": "1.75rem", // 28px
        "custom-2xl": "2.125rem", // 34px
      },
    },
  },
  variants: {},
  plugins: [],
};
