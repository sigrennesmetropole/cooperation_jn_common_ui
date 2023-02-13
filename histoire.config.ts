import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  plugins: [HstVue()],
  routerMode: 'hash',
  vite: {
    base: process.env.HISTOIRE_BASE || '/dist/',
  },
})
