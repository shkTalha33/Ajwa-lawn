import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors
      colors: {
        brand: {
          white: "#fff",
          black: "#000",
          light: "#f8fafc",
          dark: "#0a0a0a",
          deepdark: "#000",
          primary: "#B22222",
          secondary: "#c4c3d0",
          accent: "#06b6d4",
          muted: "#64748b",
          warning: "#f59e0b", // Golden Yellow
          warningdark: "#d97706",
        },
      },
      // box shadow
      boxShadow: {
        xLight: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
        light: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        medium: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        dark: "0 10px 15px -3px rgba(0, 0, 0, 0.2)",
      },
      backgroundImage: {
        primaryGradient: "linear-gradient(to right, #B22222, #7A1A1A)",
      },
      // border radius
      borderRadius: {
        light: "0.25rem", // 4px
        medium: "0.5rem", // 8px
        dark: "1rem", // 16px
      },
      // opacity
      opacity: {
        disabled: "0.3",
      },
      // font sizes
      fontSize: {
        tiny: "0.75rem", // 12px
        base: "1rem", // 16px
        big: "1.25rem", // 20px
        giant: "2rem", // 32px
      },
      // media screens
      screens: {
        xs: "400px", // Custom mobile breakpoint (smaller than 'sm')
        sm: "640px", // Tailwind's default 'sm' breakpoint
        md: "768px", // Tailwind's default 'md' breakpoint
        lg: "1024px", // Tailwind's default 'lg' breakpoint
        xl: "1280px", // Tailwind's default 'xl' breakpoint
        "2xl": "1536px", // Tailwind's default '2xl' breakpoint
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

export default config;
