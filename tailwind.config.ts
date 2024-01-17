import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      primary: {
        '100': '#382bf0',
        '200': '#5e43f3',
        '300': '#7a5af5',
        '400': '#9171f8',
        '500': '#a688fa',
        '600': '#ba9ffb',
      },
      dark: {
        '100': '#121212',
        '200': '#282828',
        '300': '#3f3f3f',
        '400': '#575757',
        '500': '#717171',
        '600': '#8b8b8b',
      },
      mixed: {
        '100': '#1a1625',
        '200': '#2f2b3a',
        '300': '#46424f',
        '400': '#5e5a66',
        '500': '#76737e',
        '600': '#908d96'
      }
    },
    fontFamily: {
      body: ['Inter', 'sans-serif']
    }
  },
  plugins: [],
}
export default config
