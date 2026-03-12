const http = require('http')
const bl = require('bl')

http.get(process.argv[2], function (response) {
  // response.pipe(bl(...)) з'єднує потік відповіді з нашою "збиралкою"
  response.pipe(bl(function (err, data) {
    if (err) return console.error(err)
    
    // data — це Buffer, перетворюємо його на текст
    const result = data.toString()
    console.log(result.length)
    console.log(result)
  }))
})