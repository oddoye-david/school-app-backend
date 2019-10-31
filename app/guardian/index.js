const express = require('express')
const router = express.Router()

const GuardianHandler = require('./handler')
const GuardianModel = require('./model')
const GuardianController = require('./controller')

const guardianController = GuardianController(GuardianModel)
const guardianHandler = GuardianHandler(guardianController)

router.get('/', guardianHandler.list)
router.get('/:id', guardianHandler.get)
router.post('/', guardianHandler.create)
router.get('/:name', guardianHandler.getByGuardianName)
router.get('/class/:classId', guardianHandler.getByClassId)

module.exports = {
  router,
  handler: guardianHandler
}
