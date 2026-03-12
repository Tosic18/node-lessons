const http = require('http')
const fs = require('fs')

const port = process.argv[2]
const fileLocation = process.argv[3]

const server = http.createServer(function (req, res) {
  // Встановлюємо заголовок відповіді (хороший тон)
  res.writeHead(200, { 'content-type': 'text/plain' })

  // Створюємо потік читання файлу
  const src = fs.createReadStream(fileLocation)

  // З'єднуємо потік файлу з потоком відповіді (response)
  src.pipe(res)
})

server.listen(port)