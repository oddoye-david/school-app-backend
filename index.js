const server = require('./app/server') // import server module from app directory
const StudentRouter = require('./app/student/router')

const PORT = 5555

server.use('/students', StudentRouter) // paths starting with "students" will be handled by StudentRouter

// start server on port
server.listen(PORT, () =>
  console.log(`School app backend listening on port ${PORT}!`)
)
