// entity based handler
module.exports = (studentController) => ({
  list: async (req, res) => {
    const students = await studentController.list()
    return res.json({ data: students })
  },

  create: async (req, res) => {
    const { name, age, classId } = req.body
    const newStudent = { name, age, classId }

    try {
      const newlyCreatedStudent = await studentController.create(newStudent)
      return res.json({ data: newlyCreatedStudent })
    } catch (error) {
      return res.status(400).json({ status: 'ERROR', error })
    }
  },

  get: async (req, res) => {
    const { id } = req.params

    const student = await studentController.getById(id)
    return res.json({ data: student })
  },

  getByClassId: async (req, res) => {
    const { classId } = req.params

    const students = await studentController.listByClass(classId)
    return res.json({ data: students })
  },

  getByStudentName: async (req, res) => {
    const { name } = req.params

    const students = await studentController.listByName(name)
    return res.json({ data: students })
  }
})
