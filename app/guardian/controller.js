// connects to and retrieves data
module.exports = ({ model: GuardianModel, validate }) => {
  /**
   * List all guardians
   *
   */
  const list = async () => {
    const guardians = await GuardianModel.find({}).lean()
    return guardians
  }

  /**
   * Get a specific guardian by their _id
   *
   */
  const getById = async id => {
    const guardian = await GuardianModel.findOne({
      _id: id
    }).lean()
    return guardian
  }

  /**
   * List guardians by name
   *
   */
  const listByName = async name => {
    const guardians = await GuardianModel.find({
      name: {
        $regex: new RegExp(`^${name}$`, 'i'),
        $options: 'i'
      }
    }).lean()
    return guardians
  }

  /**
   * Create a guardian
   *
   */
  const create = async guardianData => {
    // calidates the guardian data coming in
    validate(guardianData)

    const newlyCreatedGuardian = await GuardianModel.create(guardianData)
    return newlyCreatedGuardian
  }

  return {
    list,
    getById,
    listByName,
    create
  }


}
