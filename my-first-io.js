const fs = require('fs')

// Зчитуємо файл (шлях беремо з process.argv[2])
const contents = fs.readFileSync(process.argv[2])

// Перетворюємо в рядок і розбиваємо по символу нового рядка
// Кількість переносів = кількість елементів масиву мінус 1
const lines = contents.toString().split('\n').length - 1

console.log(lines)