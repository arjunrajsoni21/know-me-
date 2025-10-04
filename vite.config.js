// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    // allow ngrok free domains (and classic ngrok.io domains)
    allowedHosts: [/\.ngrok-free\.dev$/, /\.ngrok\.io$/]
  }
})
