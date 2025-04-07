import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT) || 10000,
    allowedHosts: ['myportfolio-1-0p5h.onrender.com'],
  },
  preview: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT) || 10000,
    allowedHosts: ['myportfolio-1-0p5h.onrender.com'],
  }
})

