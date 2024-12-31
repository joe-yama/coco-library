import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
		// colors:{
		// 	primary:{
		// 		'50': '#f9f6f3',
    //     '100': '#f0ebe3',
    //     '200': '#e1d6c7',
    //     '300': '#cdbba4',
    //     '400': '#b89c7f',
    //     '500': '#aa8465',
    //     '600': '#9d7359',
    //     '700': '#835e4b',
    //     '800': '#6b4e41',
    //     '900': '#574037',
    //     '950': '#2e211c',
		// 	},
		// 	secondary: {
		// 		'50': '#f4f7fa',
    //     '100': '#e3e8f0',
    //     '200': '#d4dce9',
    //     '300': '#b7c6d9',
    //     '400': '#94a8c6',
    //     '500': '#7b8eb6',
    //     '600': '#6879a8',
    //     '700': '#5d6998',
    //     '800': '#4f587e',
    //     '900': '#434b65',
    //     '950': '#2c2f3f',
		// 	}
		// },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
