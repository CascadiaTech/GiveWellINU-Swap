module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      sm: '450px',
      md: '700px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontSize: {
      sm: '0.8rem',
      lg: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '2.5rem',
      '4xl': '3.441rem',
      '5xl': '5rem',
      '6xl': '5.8rem',
    },
  },
  variants: {
    extend: {},
  },
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  plugins: [require('tw-elements/dist/plugin'), require('tailwindcss-elevation')(['responsive'])], // typescript-elsint no var requires
}
