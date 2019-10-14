// uses controller(s) method(s) to compose data

const StudentController = require('./controller')

/**
 * List all students
 *
 */
const list = async () => {
  const students = await StudentController.list()
  return students
}

/**
 * Get a specific student by their _id
 *
 */
const getById = async id => {
  try {
    // check for falsy values
    if (!id) {
      throw new Error('id must have a value')
    }

    const student = await StudentController.getById(id)
    return student
  } catch(error) {
    console.error(error)
    throw error
  }
}

/**
 * List students by name
 *
 */
const listByName = async name => {
  try {
    // check for falsy values
    if (!name) {
      throw new Error('name must have a value')
    }

    const students = await StudentController.listByName(id)
    return students
  } catch(error) {
    console.error(error)
    throw error
  }
}

/**
 * List students in a class
 *
 */
const listByClass = async classId => {
  try {
    // check for falsy values
    if (!classId) {
      throw new Error('class must have a value')
    }

    const students = await StudentController.listByClass(classId)
    return students
  } catch(error) {
    console.error(error)
    throw error
  }
}

/**
 * Create a student
 *
 */
const create = async (studentData) => {
  try {
    if (!studentData) {
      throw new Error('Student data connot be null')
    }

    const newlyCreatedStudent = await StudentController.create(studentData)
    return newlyCreatedStudent
  } catch(error) {
    console.error(error)
    throw error
  }
}

module.exports = {
  list,
  getById,
  listByName,
  listByClass
}
