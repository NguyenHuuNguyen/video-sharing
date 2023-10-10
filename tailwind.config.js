/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        sidebar: "0 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      width: {
        "17px": "17px",
        "220px": "220px",
        "300px": "300px",
      },
      height: {
        "17px": "17px",
        "220px": "220px",
        "300px": "300px",
      },
      margin: {
        "20px": "20px",
        "30px": "30px",
        "35px": "35px",
        "40px": "40px",
        "60px": "60px",
        "300px": "300px",
      },
      padding: {
        "20px": "20px",
        "35px": "35px",
        "40px": "40px",
        "60px": "60px",
        "300px": "300px",
      },
      colors: {
        'primary': "#12F852",
      },
      backgroundColor : {
        'grey-fade' : 'rgba(217, 217, 217, 0.70);'
      }
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(primary|second)/,
    },
  ],
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
};
