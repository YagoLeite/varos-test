import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "radial-custom":
          "radial-gradient(50% 50% at 50% 50%, #D3D6DF 0%, rgba(19, 19, 19, 0.00) 100%)",
      },
      backgroundColor: {
        greenHero: "rgba(25, 200, 25, 0.40)",
        wrapperBlack: "#131313",
        featuredCardBlack: "#131516",
        inputBackground: "#222729",
      },
      textColor: {
        greenHero: "#00F700",
        quoteGreen: "#19C819",
      },

      borderColor: {
        featuredCardGray: "#4D5358",
        secondGray: "#222729",
      },
      fontFamily: {
        sans: ["Red Hat Display", "sans-serif"],
      },
      screens: {
        mobile: "390px",
        tablet: "900px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
export default config
