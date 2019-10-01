// connects to and retrieves data
const { model: StudentModel } = require('./model')

/**
 * List all students
 *
 */
const list = async () => {
  const students = await StudentModel.find({}).lean()
  return students
}

/**
 * Get a specific student by their _id
 *
 */
const getById = async id => {
  const student = await StudentModel.findOne({ _id: id }).lean()
  return student
}

/**
 * List students by name
 *
 */
const listByName = async name => {
  const students = await StudentModel.find({
    name: { $regex: new RegExp(`^${name}$`, 'i'), $options: 'i' }
  }).lean()
  return students
}

/**
 * List students in a class
 *
 */
const listByClass = async classId => {
  const students = await StudentModel.find({ class: classId }).lean()
  return students
}

module.exports = {
  list,
  getById,
  listByName,
  listByClass
}
