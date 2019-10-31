const mongoose = require('mongoose')

const server = require('./app/server') // import server module
const { router: StudentRouter } = require('./app/student')
const { router: GuardianRouter } = require('./app/guardian');

const PORT = 5555
const MONGO_URL = 'mongodb://localhost:27017/school-app'

server.use('/students', StudentRouter) // paths starting with "students" will be handled by StudentRouter
server.use('/guardians', GuardianRouter)

const init = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    // start server on port
    server.listen(PORT, () =>
      console.log(`School app backend listening on port ${PORT}!`)
    )
  } catch (error) {
    // some error happened either in connceting the database or starting the server
    // log the error
    console.error('Error in starting up server', error)
    // kill the server
    process.exit(1)
  }
}

init()
