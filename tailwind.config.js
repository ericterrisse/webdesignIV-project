/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				afacad: ['"Afacad"', "sans-serif"],
				reemkufi: ['"Reem Kufi"', "sans-serif"],
				montserrat: ['"Montserrat"', "sans-serif"],
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {
				background: "hsl(var(--background))",
				neutral1: "hsl(var(--neutral-1))",
				neutral2: "hsl(var(--neutral-2))",
				neutral3: "hsl(var(--neutral-3))",
				primary: "hsl(var(--primary))",
				secondary: "hsl(var(--secondary))",
				third: "hsl(var(--third))",
				fourth: "hsl(var(--fourth))",
				primary2: "hsl(var(--primary-2))",
				secondary2: "hsl(var(--secondary-2))",
				third2: "hsl(var(--third-2))",
				fourth2: "hsl(var(--fourth-2))",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
