const http = require('http')
const bl = require('bl')

const results = []
let count = 0

function printResults() {
  for (let i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function httpGet(index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) return console.error(err)

      results[index] = data.toString()
      count++

      // Якщо всі три запити готові — виводимо результат
      if (count === 3) {
        printResults()
      }
    }))
  })
}

// Запускаємо три запити
for (let i = 0; i < 3; i++) {
  httpGet(i)
}