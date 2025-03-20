import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import stylelint from 'vite-plugin-stylelint'

export default defineConfig({
  plugins: [react(), stylelint()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
})
