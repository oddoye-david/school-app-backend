// entity based routes

const express = require('express')
const { list, getById, listByClass, listByName, create } = require('./handler')
const { validate } = require('./model')

const router = express.Router()

router.get('/', async (req, res) => {
  const students = await list()
  return res.json({ data: students })
})

router.post('/', async (req, res) => {
  const { name, age, classId } = req.body
  const newStudent = { name, age, classId }

  try {
    // Check that incoming student data is valid per the validation schema
    validate(newStudent)

    const newlyCreatedStudent = await create(newStudent)
    return res.json({ data: newlyCreatedStudent })
  } catch (error) {
    return res.status(400).json({ status: 'ERROR', error })
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params

  const student = await getById(id)
  return res.json({ data: student })
})

router.get('/class/:classId', async (req, res) => {
  const { classId } = req.params

  const students = await listByClass(classId)
  return res.json({ data: students })
})

router.get('/class/:name', async (req, res) => {
  const { name } = req.params

  const students = await listByName(name)
  return res.json({ data: students })
})

module.exports = router
