const http = require('http')

const url = process.argv[2]

http.get(url, function (response) {
  // Встановлюємо кодування, щоб дані приходили як рядки, а не як Buffer
  response.setEncoding('utf8')

  // Подія 'data' спрацьовує, коли приходить порція даних
  response.on('data', function (data) {
    console.log(data)
  })

  // Подія 'error' для обробки помилок у самому потоці
  response.on('error', console.error)
}).on('error', console.error) // Обробка помилок самого запиту