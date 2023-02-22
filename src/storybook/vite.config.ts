import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@ui': path.resolve(__dirname, 'node_modules/ui/src'),
      'design': path.resolve(__dirname, '../design/src'),
      '@design': path.resolve(__dirname, '../design/src'),
    },
  },
  optimizeDeps: {
    include: ['ui'],
  },
  build: {
    commonjsOptions: {
      include: [/ui/, /node_modules/],
    },
  },
})
