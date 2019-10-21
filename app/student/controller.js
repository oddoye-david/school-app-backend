// connects to and retrieves data
module.exports = ({ model: studentModel, validate }) => {
  /**
   * List all students
   *
   */
  const list = async () => {
    const students = await studentModel.find({}).lean()
    return students
  }

  /**
   * Get a specific student by their _id
   *
   */
  const getById = async id => {
    const student = await studentModel.findOne({ _id: id }).lean()
    return student
  }

  /**
   * List students by name
   *
   */
  const listByName = async name => {
    const students = await studentModel.find({
      name: { $regex: new RegExp(`^${name}$`, 'i'), $options: 'i' }
    }).lean()
    return students
  }

  /**
   * List students in a class
   *
   */
  const listByClass = async classId => {
    const students = await studentModel.find({ class: classId }).lean()
    return students
  }

  /**
   * Create a student
   *
   */
  const create = async studentData => {
    // Check that incoming student data is valid per the validation schema
    validate(studentData)

    const newlyCreatedStudent = await studentModel.create(studentData)
    return newlyCreatedStudent
  }

  return {
    list,
    getById,
    listByName,
    listByClass,
    create
  }
}
