const http = require('http')

console.clear()

function random(min, max, decimal = 0) {
  const pow = 10 ** decimal
  const dif = (max - min) * pow
  return ((min * pow) + Math.round(Math.random() * dif) / pow)
}

function call(port) {
  http.request({ host: 'localhost', port }).end()
}

function next(port, latency) {
  const wait = random(0, latency, 2)
  console.log(`http://localhost:${port} +${wait}s`)
  call(port)

  setTimeout(() => next(port, latency), wait * 1000)
}

next(3000, 3)
next(3001, 2)
next(3002, 1)
next(3003, 3)
next(3004, 2)
next(3005, 1)
