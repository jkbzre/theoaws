/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./node_modules/flowbite/**/*.js",
      "./node_modules/flowbite-react/lib/**/*.js",
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        libre: ['"Libre Baskerville"'],
        garamond: ['"Garamond"']
      }
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }

      'xl': '2500px',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  variants: {
    extend: {
      display: ['group-hover'],
      colors: {
        'background': '#fcfcfc',
      }
    },
  },
}
