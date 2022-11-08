/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
      colors: {
        'backgroundBase-light': '#F9F9F9',
        'backgroundLevel1-light': '#FFFFFF',
        'backgroundLevel2-light': '#F0F0F0',
        'borderBase-light': '#E5E5E5',
        'textColorBase-light': '#222222',
        'backgroundBase-dark': '#181818',
        'backgroundLevel1-dark': '#202020',
        'backgroundLevel2-dark': '#313131',
        'borderBase-dark': '#383838',
        'textColorBase-dark': '#FFFFFF'
      }
    }
	},
	plugins: []
}
