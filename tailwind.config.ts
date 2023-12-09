import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#0699A6',
        secondary: '#9E8C6C',
        font: '#000'
      },
      fontFamily: {
        playfair: ['"Playfair Display"'],
        sansnarrow: ['"PT Sans Narrow"']
      }
    },
  },
  plugins: [],
}
export default config
