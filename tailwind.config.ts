import type { Config } from 'tailwindcss'

export default {
  content: [
    './resources/views/**/*.blade.php',
    './app/View/Components/**/*.php',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Instrument Sans', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
} satisfies Config
