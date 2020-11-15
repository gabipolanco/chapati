const {Scheam, model, Schema } = require('mongoose')

const placeSchema = new Schema({
  name: String,
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  location: String
})

module.exports = model('Place', placeSchema)