/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'sans': ['"Rubik"', 'sans-serif'],
			'serif': ['"Cormorant"', 'serif'],
		  },
		  colors: {
			'darkBlue': '#132958',
			'gold': '#D0A354',
			'offWhite': '#F5F5F5',
			'pureWhite': "#fff",
			'black': '#1B1C1E',
		  },
	},
	plugins: [],
}
