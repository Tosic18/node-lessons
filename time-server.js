const net = require('net')

// Функція для форматування чисел (додає 0 попереду)
function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
}

function now() {
  const d = new Date()
  return d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1) + '-' + // Місяці починаються з 0
    zeroFill(d.getDate()) + ' ' +
    zeroFill(d.getHours()) + ':' +
    zeroFill(d.getMinutes())
}

const server = net.createServer(function (socket) {
  // socket.end(data) відправляє дані і закриває з'єднання
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))