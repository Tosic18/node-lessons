const fs = require('fs')

// Шлях до файлу
const file = process.argv[2]

// fs.readFile(шлях, кодування, callback)
// 'utf8' автоматично перетворить Buffer у рядок
fs.readFile(file, 'utf8', function (err, data) {
  if (err) {
    return console.log(err)
  }
  
  // Тепер data — це вже рядок (String)
  const lines = data.split('\n').length - 1
  console.log(lines)
})