import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#001b2e',
          mid: '#1d3f58',
          accent: '#537692',
          light: '#b3cde4',
          bg: '#eef3f9'
        }
      },
      borderRadius: { '2xl': '1rem' },
      boxShadow: { soft: '0 6px 30px rgba(0,0,0,0.15)' }
    }
  },
  plugins: []
};
export default config;
