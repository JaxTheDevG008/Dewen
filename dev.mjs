import { execFile } from "node:child_process"
import { createServer } from "vite"

const server = await createServer()

try {
  await server.listen()
  server.printUrls()

  const url = server.resolvedUrls?.local[0]
  if (!url) {
    throw new Error("Vite started, but did not report a local URL.")
  }

  execFile("open", [url], (error) => {
    if (error) {
      console.error(`Could not open ${url} in the default browser: ${error.message}`)
    }
  })
} catch (error) {
  await server.close()
  throw error
}
