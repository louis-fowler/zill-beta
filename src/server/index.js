const server = require('./server')

const port = process.env.PORT || 5000

server.listen(port, function () {
  console.log('Listening on port', port)
})