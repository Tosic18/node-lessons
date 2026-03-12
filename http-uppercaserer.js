const http = require('http')
const map = require('through2-map')

const port = process.argv[2]

const server = http.createServer(function (req, res) {
  // Перевіряємо, чи це POST запит (гарна практика)
  if (req.method !== 'POST') {
    return res.end('Send me a POST\n')
  }

  // req (запит) — це вхідний потік (Readable Stream)
  // res (відповідь) — це вихідний потік (Writable Stream)
  req.pipe(map(function (chunk) {
    // Перетворюємо кожен шматок даних у рядок і робимо його великими літерами
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(port)