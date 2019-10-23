// uses controller(s) method(s) to compose data

// TODO: Redo methods to reflect Guardian object instead of student

const StudentController = require('./controller')

/**
 * List all guardians
 *
 */
const list = async () => {
  const guardians = await StudentController.list()
  return guardians
}

/**
 * Get a specific guardian by their _id
 *
 */
const getById = async id => {
  try {
    // check for falsy values
    if (!id) {
      throw new Error('id must have a value')
    }

    const guardian = await StudentController.getById(id)
    return guardian
  } catch(error) {
    console.error(error)
    throw error
  }
}

/**
 * List guardians by name
 *
 */
const listByName = async name => {
  try {
    // check for falsy values
    if (!name) {
      throw new Error('name must have a value')
    }

    const guardians = await StudentController.listByName(id)
    return guardians
  } catch(error) {
    console.error(error)
    throw error
  }
}

/**
 * List guardians in a class
 *
 */
const listByClass = async classId => {
  try {
    // check for falsy values
    if (!classId) {
      throw new Error('class must have a value')
    }

    const guardians = await StudentController.listByClass(classId)
    return guardians
  } catch(error) {
    console.error(error)
    throw error
  }
}

/**
 * Create a guardian
 *
 */
const create = async (guardianData) => {
  try {
    if (!guardianData) {
      throw new Error('Guardian data connot be null')
    }

    const newlyCreatedStudent = await StudentController.create(guardianData)
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
  listByClass,
  create,
}
