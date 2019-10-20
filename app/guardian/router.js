// entity based routes

const express = require('express')
const { list, getById, listByClass, listByName, create } = require('./handler')
const { validate } = require('./model')

const router = express.Router()

router.get('/', async (req, res) => {
  const guardians = await list()
  return res.json({ data: guardians })
})

router.post('/', async (req, res) => {
  const { name, age, classId } = req.body
  const newStudent = { name, age, classId }

  try {
    // Check that incoming guardian data is valid per the validation schema
    validate(newStudent)

    const newlyCreatedStudent = await create(newStudent)
    return res.json({ data: newlyCreatedStudent })
  } catch (error) {
    return res.status(400).json({ status: 'ERROR', error })
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params

  const guardian = await getById(id)
  return res.json({ data: guardian })
})

router.get('/class/:classId', async (req, res) => {
  const { classId } = req.params

  const guardians = await listByClass(classId)
  return res.json({ data: guardians })
})

router.get('/class/:name', async (req, res) => {
  const { name } = req.params

  const guardians = await listByName(name)
  return res.json({ data: guardians })
})

module.exports = router
