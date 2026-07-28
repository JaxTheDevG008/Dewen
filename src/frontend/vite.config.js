import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' 
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "inline",
      includeAssets: ['Images/**/*.{png,jpg,jpeg,svg,webp,gif,ico}'],
      devOptions: {
        enabled: true
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,jpeg,svg,webp,gif}']
      },
    })
  ],
  server: {
    host: "127.0.0.1",
    port: 3000,
    open: true
  }
})
