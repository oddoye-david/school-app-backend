// Shape and validation of data
const mongoose = require('mongoose')
const Joi = require('@hapi/joi')

const Schema = mongoose.Schema

// Mongodb schema
const guardianSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    wards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true }
  },
  { timestamps: true, _id: true }
)

// Populate wards for guardians
guardianSchema.post('find', async function(guardians) {
  for (let guardian of guardians) {
    await guardian.populate('wards').execPopulate();
  }
});

// Create mongodb model
const GuardianModel = mongoose.model('Guardian', guardianSchema)

// Object validation
const validationSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number()
    .min(1)
    .required(),
  wards: Joi.array().min(1),
  address: Joi.string().required(),
  phone: Joi.string().required(),
  email: Joi.string().email()
})

module.exports = {
  model: GuardianModel,
  validate: (data) => validationSchema.validate(data)
}
