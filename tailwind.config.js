/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#060a12',
          surface: '#0b1120',
          card: '#0f1929',
          border: '#1a2740',
        },
        neon: {
          blue: '#38bdf8',
          purple: '#a78bfa',
          cyan: '#22d3ee',
          green: '#4ade80',
          pink: '#f472b6',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        neon: '0 0 24px rgba(56,189,248,0.4), 0 0 64px rgba(56,189,248,0.15)',
        'neon-sm': '0 0 12px rgba(56,189,248,0.35)',
        'neon-purple': '0 0 24px rgba(167,139,250,0.4)',
      },
    },
  },
  plugins: [],
}
