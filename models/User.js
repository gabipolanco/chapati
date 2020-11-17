const { Schema, model } = require('mongoose')
const userSchema = new Schema({
    name: String,
    password: String,
    email: String,
    googleId: String,
    facebookId: String,
    role: {
        type: String,
        enum: ['viajero', 'host'],
        default: 'viajero'
    },
    volunteeringId: [{
        type: Schema.Types.ObjectId,
        ref: 'Volunteering'
    }],
    productId: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }],
    cart: [{
        name: String,
        price: String
    }],
    placeId: {
        type: Schema.Types.ObjectId,
        ref: 'Place'
    }
}, {
    timestamps: true
})

module.exports = model('User', userSchema)