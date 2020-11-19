const { Scheam, model, Schema } = require('mongoose')

const placeSchema = new Schema({
    name: String,
    image: String,
    ownerId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    location: String,
    contact: String,
    help: {
        type: [String],
        enum: ['construccion y mantenimiento', 'jardineria', 'residencias artisticas']
    },
    minStay: String,
    inExchange: {
        type: [String]
    },
    availability: {
        type: [String],
        enum: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
    },
    description: String
})

module.exports = model('Place', placeSchema)