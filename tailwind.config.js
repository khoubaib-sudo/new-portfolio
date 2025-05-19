// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        mouthAnim: {
          "0%": { transform: "translate(-50%, -50%) rotateX(180deg)" },
          "10%": { transform: "translate(-50%, -50%) rotateZ(360deg)" },
          "40%": { transform: "translate(-50%, -50%) rotateZ(320deg)" },
          "60%": { transform: "translate(-50%, -50%) rotateZ(900deg)" },
          "100%": { transform: "translate(-50%, -50%) rotateZ(900deg)" },
        },
        leftEye: {
          "0%, 50%": {
            width: "5vh",
            height: "5vh",
            transform: "translate(-50%, -50%)",
          },
          "60%, 90%": {
            width: "2vh",
            height: "2vh",
            transform: "translate(-150%, -50%)",
          },
          "100%": {
            width: "5vh",
            height: "5vh",
            transform: "translate(-50%, -50%)",
          },
        },
        rightEye: {
          "0%, 50%": {
            width: "5vh",
            height: "5vh",
            transform: "translate(-50%, -50%)",
          },
          "60%, 70%, 90%": {
            width: "2vh",
            height: "2vh",
            transform: "translate(50%, -50%)",
          },
          "75%": {
            width: "2vh",
            height: "2px",
            transform: "translate(50%, -50%)",
          },
          "100%": {
            width: "5vh",
            height: "5vh",
            transform: "translate(-50%, -50%)",
          },
        },
      },
      animation: {
        mouthAnim: "mouthAnim 3s infinite cubic-bezier(0.455, 0.030, 0.515, 0.955)",
        leftEye: "leftEye 3s infinite cubic-bezier(0.455, 0.030, 0.515, 0.955)",
        rightEye: "rightEye 3s infinite cubic-bezier(0.455, 0.030, 0.515, 0.955)",
      },
    },
    
  },
  plugins: [require("@tailwindcss/container-queries"), nextui()],
};
