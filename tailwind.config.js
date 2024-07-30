/** @type {import('tailwindcss').Config} */
// biome-ignore lint/style/noDefaultExport: tailwind expects it to be default
export default {
	content: ["./index.html", "./src/**/*.{ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [],
};
