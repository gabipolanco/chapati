const {Scheam, model, Schema } = require('mongoose')

const volunteeringSchema = new Schema({
  dates: {
    start: String,
    end: String
  },
  placeId: {
    type: Schema.Types.ObjectId,
    ref: 'Place'
  },
  languages: [String],
  typeVolunteering: {
    type: [String],
    enum: ['construction', 'garden', 'art']
  },
  comment: String
})

module.exports = model('Volunteering', volunteeringSchema)