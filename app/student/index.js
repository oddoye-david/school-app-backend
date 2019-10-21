const express = require('express')
const router = express.Router()

const StudentHandler = require('./handler')
const StudentModel = require('./model')
const StudentController = require('./controller')

const studentController = StudentController(StudentModel)
const studentHandler = StudentHandler(studentController)

router.get('/', studentHandler.list)
router.get('/:id', studentHandler.get)
router.post('/', studentHandler.create)
router.get('/:name', studentHandler.getByStudentName)
router.get('/class/:classId', studentHandler.getByClassId)

module.exports = {
  router,
  handler: studentHandler
}
