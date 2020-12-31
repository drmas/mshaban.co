module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
