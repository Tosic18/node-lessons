const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const ext = '.' + process.argv[3] // Додаємо крапку до розширення

fs.readdir(folder, function (err, list) {
  if (err) return console.error(err)

  list.forEach(function (file) {
    // path.extname повертає розширення файлу (разом з крапкою)
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})