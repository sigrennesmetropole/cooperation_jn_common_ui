/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./lib/**/*.{js,ts,vue}'],
  safelist: [
    // Link colors
    'before:bg-neutral-900',
    'stroke-neutral-900',

    'before:bg-red-600',
    'stroke-red-600',
    'text-neutral-500',
    'before:bg-neutral-500',
    'text-neutral-900',
    'before:bg-neutral-900',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
