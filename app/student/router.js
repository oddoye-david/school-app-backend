// entity based routes

const express = require('express')
const { list, getById, listByClass, listByName} = require('./handler')

const router = express.Router()

router.get('/', async (req, res) => {
  const students = await list()
  return res.json({ data: students })
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
