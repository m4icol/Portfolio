/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				"CS-Dark-Background": "hsl(0, 0, 5)",
				"CS-Dark-Secondary": "hsl(0, 0, 10)",
				"CS-Dark-Header": "hsl(0, 0, 6)",
				"CS-Dark-Font": "hsl(0, 0, 100)",
				"CS-Dark-Border": "hsl(0, 0, 50)",

				"CS-Light-Background": "hsl(0, 0, 98)",
				"CS-Light-Secondary": "hsl(0, 0, 0)",
				"CS-Light-Header": "hsl(0, 0, 97)",
				"CS-Light-Font": "hsl(0, 0, 0)",
				"CS-Light-Border": "hsl(0, 0, 0)"
			}
		},
	},
	plugins: [],
}
