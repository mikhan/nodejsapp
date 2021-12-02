const http = require('http')
const hostname = '127.0.0.1'
const port = 3000

let count = 1

const server = http.createServer((req, res) => {
  const content = []
  content.push(`Server running at http://${hostname}:${port}`)
  content.push(`Request id: ${count++}`)
  content.push(`Request url: ${req.url}`)

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end(content.join('\n') + '\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
