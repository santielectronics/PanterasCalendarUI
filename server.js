const { createServer } = require("http")
const { parse } = require("url")
const next = require("next")
const os = require("os")

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

// Get local IP address
function getLocalIp() {
  const interfaces = os.networkInterfaces()
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      // Skip over non-IPv4 and internal (loopback) addresses
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address
      }
    }
  }
  return "0.0.0.0" // Fallback
}

const localIp = getLocalIp()
const port = Number.parseInt(process.env.PORT || "3000", 10)

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  }).listen(port, "0.0.0.0", (err) => {
    if (err) throw err
    console.log(`> Ready on http://${localIp}:${port}`)
    console.log(`> You can also access via http://localhost:${port}`)
  })
})


