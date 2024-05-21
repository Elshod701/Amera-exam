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
    screens: {
      "2xl":"1400px",
      xl: "1200px",
      lg: "1024px",
      md: "855px",
      sm: "540px",
    },
    extend: {
      colors: {
        footerTEXT: "hsl(var(--footerTEXT))",
        footerB: "hsl(var(--footerB))",
        topButtonBg: "hsl(var(--topButtonBg))",
        productText: "hsl(var(--productText))",
        borderColor:"hsl(var(--borderColor))",
        whiteColor2: "hsl(var(--whiteColor2))",
        bodyColor: "hsl(var(--bodyColor))",
        whiteColor: "hsl(var(--whiteColor))",
        textColor2: "hsl(var(--textColor2))",
        footerBg: "hsl(var(--footerBg))",
        textColor: "hsl(var(--textColor))",
        mainColor: "hsl(var(--mainColor))",
        buttonColor: "hsl(var(--buttonColor))",
        linkColor: "hsl(var(--linkCOlor))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
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
        shine: {
          "100%": { left: "125%" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shine:"shine 2s"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config