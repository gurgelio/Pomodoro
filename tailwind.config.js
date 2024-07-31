/** @type {import('tailwindcss').Config} */
// biome-ignore lint/style/noDefaultExport: tailwind expects it to be default
export default {
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Roboto", "sans-serif"],
			mono: ["RobotoMono", "ui-monospace"],
		},
		extend: {},
	},
	plugins: [],
};
