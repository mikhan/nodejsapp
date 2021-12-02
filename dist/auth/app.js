console.clear();

const http = require('http')
const hostname = '127.0.0.1';
const port = Number(process.env.PORT ?? '3000');

let count = 0

const server = http.createServer((req, res) => {
  count++; 

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Count: ${count}\n`);

  console.log(`Count: ${count}`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

