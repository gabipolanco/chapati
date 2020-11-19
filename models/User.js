const { Schema, model } = require('mongoose')
const userSchema = new Schema({
    name: String,
    password: String,
    email: String,
    image: {
        type: String,
        default: '../images/login.png'
    },
    googleId: String,
    facebookId: String,
    role: {
        type: String,
        enum: ['viajero', 'host'],
        default: 'viajero'
    },
    favorites: [{
        type: Schema.Types.ObjectId,
        ref: 'Place'
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