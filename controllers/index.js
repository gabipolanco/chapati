const Place = require('../models/Place')
const Product = require('../models/Product')

// HOME

exports.homeView = (req, res, next) => {
    res.render('index');
}

// GALLERIES

exports.chapatiGalleryView = (req, res, next) => {
    res.render('public/houseGallery');
}

exports.peopleGalleryView = (req, res, next) => {
    res.render('public/peopleGallery');
}

// STORE

exports.storeView = async(req, res, next) => {
    try {
        const products = await Product.find()
        console.log(products)
        res.render('public/store', { products });
    } catch (err) {
        console.log(err)
    }
}

// PLACES

exports.placesView = async(req, res, next) => {
    try {
        const places = await Place.find()
        res.render('public/places', { places });
    } catch (err) {
        console.log(err)
    }
}

// CONTACT

exports.contactView = (req, res, next) => {
    res.render('public/contactUs');
}