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
        font: '#000',
        background: 'rgb(237,235,228)'
      },
      keyframes: {
        fadeout: {
          '0%': {
            opacity: '1',
          },
          '99%': {
            opacity: '0',
            display: 'none'
          },
          '100%': {
            opacity: '0'
          }
        },
        fadein: {
          '0%': {
            display: 'block',
            opacity: '0',
          },
          '1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          }
        }
      },
      animation: {
        fadeout: 'fadeout 300ms ease-in-out forwards',
        fadein: 'fadein 300ms ease-in-out forwards'
      }
    },
  },
  plugins: [],
}
export default config
