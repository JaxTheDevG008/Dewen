import { defineConfig } from "vite"
import { VitePWA } from "vite-plugin-pwa"
import { fileURLToPath } from "url"
import { dirname, resolve } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  root: __dirname,
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "inline",
      includeAssets: ["favicon.ico", "apple-touch-icon.png"],
      devOptions: {
        enabled: false
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,jpg,jpeg,svg,webp,gif,PNG,JPG,JPEG,SVG,webmanifest}"],
        maximumFileSizeToCacheInBytes: 3000000
      }
    })
  ],
  server: {
    host: "127.0.0.1",
    port: 3000,
    open: true
  },
  publicDir: "public",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html")
      }
    }
  }
})
