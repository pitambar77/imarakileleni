

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(),tailwindcss(),],
  server: {
    host: true, // important for domain / subdomain access
    allowedHosts: [
      'imarakilelenisafaris.com'
    ]
  }
})
