/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#08090c', // page background
          900: '#0d0f14', // raised surface
          850: '#12151c', // card
          700: '#232836', // border strong
        },
        line: 'rgba(255,255,255,0.08)',
        fg: {
          DEFAULT: '#f4f5f7',
          muted: '#a1a7b3', // 7.9:1 on ink-950
          subtle: '#7b8291', // 4.9:1 on ink-950
        },
        accent: {
          DEFAULT: '#7c9cff',
          strong: '#4062e6', // white text 5.2:1
          mint: '#5eead4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        page: '78rem',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
}
