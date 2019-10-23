// connects to and retrieves data
const { model: GuardianModel } = require('./model')
// TODO: Redo methods to reflect Guardian object instead of student

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
  const guardian = await GuardianModel.findOne({ _id: id }).lean()
  return guardian
}

/**
 * List guardians by name
 *
 */
const listByName = async name => {
  const guardians = await GuardianModel.find({
    name: { $regex: new RegExp(`^${name}$`, 'i'), $options: 'i' }
  }).lean()
  return guardians
}

/**
 * List guardians in a class
 *
 */
const listByClass = async classId => {
  const guardians = await GuardianModel.find({ class: classId }).lean()
  return guardians
}

/**
 * Create a guardian
 *
 */
const create = async guardianData => {
  const newlyCreatedStudent = await GuardianModel.create(guardianData)
  return newlyCreatedStudent
}

module.exports = {
  list,
  getById,
  listByName,
  listByClass,
  create,
}
