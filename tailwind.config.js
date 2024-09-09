/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#FF3811",
          secondary: "teal",
          ".no-scroll": {
            "-ms-overflow-style": "none" ,
          "scrollbar-width": " none"
        },
        ".btn-primary": {
          "color": "#fff",
        },
        ".btn-outline.btn-primary:hover": {
          "color": "#fff",

        },
      },
        
      },
    ],
},

  plugins: [ require('tailwind-scrollbar-hide'),require('daisyui')],
};