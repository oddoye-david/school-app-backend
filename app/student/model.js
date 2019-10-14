// Shape and validation of data
const mongoose = require('mongoose')
const Joi = require('@hapi/joi')

const Schema = mongoose.Schema

// Mongodb schema
const studentSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    classId: { type: String, required: true }
  },
  { timestamps: true, _id: true }
)

// Create mongodb model
const StudentModel = mongoose.model('Student', studentSchema)

// Object validation
const validationSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number()
    .min(1)
    .required(),
  classId: Joi.string().required()
})

module.exports = {
  model: StudentModel,
  validate: (data) => validationSchema.validate(data)
}
