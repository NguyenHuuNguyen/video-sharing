/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        sidebar: '0 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      shadow: {
        'text-shadow' : '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      width: {
        '17px': '17px',
        '220px': '220px',
        '300px': '300px',
        '400px': '400px',
        '765px': '765px',
        '1239px': '1239px',
      },
      height: {
        '17px': '17px',
        '100px': '100px',
        '120px': '120px',
        '220px': '220px',
        '277px': '277px',
        '300px': '300px',
        '427px': '427px',
        '505px': '505px',
        '700px': '700px',
      },
      minHeight: {
        '505px': '505px',
      },
      maxHeight: {
        '130px': '125px',
      },
      margin: {
        '20px': '20px',
        '30px': '30px',
        '35px': '35px',
        '40px': '40px',
        '60px': '60px',
        '100px': '100px',
        '120px': '120px',
        '300px': '300px',
      },
      padding: {
        '20px': '20px',
        '35px': '35px',
        '40px': '40px',
        '60px': '60px',
        '300px': '300px',
      },
      colors: {
        'red-logo': '#d4101d', 
        'red-text': '#ff1717',
        'blue': '#7648f8',
        'grey': '#F3F3F3'
      },
      backgroundColor : {
        'grey': '#F3F3F3',
        'blue': '#7648f8',
        'grey-video': '#ECEBEB',
      },
      boxShadow: {
        'shadow': '2px 5px 50px 10px rgba(0, 0, 0, 0.25)'
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
