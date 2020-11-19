const Place = require('../models/Place')
const Product = require('../models/Product')

// HOME

exports.homeView = (req, res, next) => {
    res.render('index');
}

// STORE

exports.storeView = async(req, res, next) => {
    try {
        const products = await Product.find()
        res.render('public/store', { products });
    } catch (err) {
        console.log(err)
    }
}

// PLACES

exports.placesView = async(req, res, next) => {
    try {
        const user = req.user
        const places = await Place.find()
        res.render('public/places', { places, user });
    } catch (err) {
        console.log(err)
    }
}

// CONTACT

exports.contactView = (req, res, next) => {
    res.render('public/contactUs');
}