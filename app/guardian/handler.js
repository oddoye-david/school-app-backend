// entity based handler
module.exports = (guardianController) => ({
  list: async (req, res) => {
    const guardians = await guardianController.list()
    return res.json({ data: guardians })
  },

  create: async (req, res) => {
    const { name, age, classId } = req.body
    const newGuardian = { name, age, classId }

    try {
      const newlyCreatedGuardian = await guardianController.create(newGuardian)
      return res.json({ data: newlyCreatedGuardian })
    } catch (error) {
      return res.status(400).json({ status: 'ERROR', error })
    }
  },

  get: async (req, res) => {
    const { id } = req.params

    const guardian = await guardianController.getById(id)
    return res.json({ data: guardian })
  },

  getByGuardianName: async (req, res) => {
    const { name } = req.params

    const guardians = await guardianController.listByName(name)
    return res.json({ data: guardians })
  }
})

