import { defineConfig } from "vite"
import { VitePWA } from "vite-plugin-pwa"
import { fileURLToPath } from "url"
import { dirname, resolve } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const isTauri = Boolean(process.env.TAURI_ENV_PLATFORM)

export default defineConfig({
  root: resolve(__dirname, "src/frontend"),
  plugins: [
    VitePWA({
      disable: isTauri,
      manifest: false,
      registerType: "autoUpdate",
      injectRegister: "inline",
      includeAssets: ["favicon.ico", "apple-touch-icon.png"],
      devOptions: {
        enabled: false
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,jpg,jpeg,svg,webp,gif,PNG,JPG,JPEG,SVG,woff2}"],
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
        navigateFallback: "index.html"
      }
    })
  ],
  server: {
    host: "127.0.0.1",
    port: 3000,
    open: false
  },
  publicDir: resolve(__dirname, "src/frontend/public"),
  build: {
    outDir: resolve(__dirname, "src/frontend/dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/frontend/index.html")
      }
    }
  }
})
