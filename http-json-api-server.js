const http = require('http')

const port = process.argv[2]

const server = http.createServer(function (req, res) {
  // Розбираємо URL вручну або через новий API
  const url = new URL(req.url, 'http://example.com')
  const time = new Date(url.searchParams.get('iso'))
  let result

  if (url.pathname === '/api/parsetime') {
    result = {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    }
  } else if (url.pathname === '/api/unixtime') {
    result = {
      unixtime: time.getTime()
    }
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})

server.listen(port)