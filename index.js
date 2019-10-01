const server = require('./app/server') // import server module from app directory

const PORT = 5555

// start server on port
server.listen(PORT, () =>
  console.log(`School app backend listening on port ${PORT}!`)
)
