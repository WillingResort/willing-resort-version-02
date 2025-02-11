import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F3EEE7",
        textColor: "#6B6B6B",
        secondaryColor:"#303030",
        borderColor:"#C5C2C2",
      },
      fontFamily: {
        sans: ['"Times New Roman"', 'Times', 'serif'],
      },
      fontSize: {
        heading: ["24px", { lineHeight: "30px" }],
      },
      letterSpacing: {
        heading: "0.05em",
      },      
      borderWidth: {
        '1.5': '1.5px', 
      },
    },
  },
  plugins: [],
} satisfies Config;
