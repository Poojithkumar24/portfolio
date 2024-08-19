import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        harley_davidson_orange:"#DD2E18",
        orange_2:"#FFAB00",

        blue_2:"#002349",
        blue_3:"#106EBE",
        blue_4:"#01257D",
        blue_5:"#00FFFF",
        blue_6:"#0A1828",
        blue_7:"#178582",
        blue_8:"#1D63FF",
        

        gold_2:"#957C3D",
        gold_3:"#BFA181",

        purple_2:"#4F0341",
        purple_3:"#EE72F8",

        pink_2:"#D8125B",
        pink_3:"#970747",
        pink_4:"#EF036C",

        gray_2:"#2C2E39",

        green_2:"#205A28",
        green_3:"#009B4D",
        green_4:"#31EC56",
        green_5:"#BAFF39",

        red_2:"#C72B32",
        red_3:"#B4121B",
        red_4:"#E7473C",

        cream_2:"#FFFDF2",
        cream_3:"#DDD0C8",
        cream_4:"EAE7DD",

        mint:"#0FFCBE",
        ivory:"#FAF5E9",

        yellow_2:"#FFCC00",
        yellow_3:"#FFCE32",

        brown_2:"#99775C",


        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config