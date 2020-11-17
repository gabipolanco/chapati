const Place = require('../models/Place')
const Product = require('../models/Product')
const User = require('../models/User')
const Volunteering = require('../models/Volunteering')

// HOST pages

exports.myProductsView = async(req, res, next) => {
    try {
        const userId = req.user
        const user = await User.findById(userId).populate('productId')
        res.render('private/myProducts', user)
    } catch (err) {
        console.log(err)
    }
}

exports.createProduct = async(req, res) => {
    try {
        const { user, name, price, description } = req.body
        const newProduct = await Product.create({ picture: req.file.path, name, description, price })
        await User.findByIdAndUpdate(user, { $push: { productId: newProduct._id } }, { new: true })
        res.redirect('/private/myproducts')
    } catch (err) {
        console.log(err)
    }
}

exports.editProductView = async(req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        res.render('private/editproduct', product)
    } catch (err) {
        console.log(err)
    }
}

exports.editProduct = async(req, res) => {
    try {
        const { id } = req.params
        const { user, name, price, description } = req.body
        await Product.findByIdAndUpdate(id, { picture: req.file.path, name, description, price }, { new: false })
        res.redirect('/private/myproducts')
    } catch (err) {
        console.log(err)
    }
}

exports.deleteProduct = async(req, res) => {
    try {
        const { id } = req.params
        await Product.findByIdAndRemove(id)
        res.redirect('/private/myproducts')
    } catch (err) {
        console.log(err)
    }
}

exports.myPlaceView = async(req, res, next) => {
    try {
        const userId = req.user
        const user = await User.findById(userId).populate('placeId')
        res.render('private/myPlace', user)
    } catch (err) {
        console.log(err)
    }
}

exports.createPlace = async(req, res) => {
    try {
        const { user, name } = req.body
        const newPlace = await Place.create({ name, image: req.file.path, ownerId: user })
        await User.findByIdAndUpdate(user, { placeId: newPlace._id }, { new: true })
        res.redirect('/private/myplace')
    } catch (err) {
        console.log(err)
    }
}

exports.editPlaceView = async(req, res) => {
    try {
        const { id } = req.params
        const place = await Place.findById(id)
        res.render('private/editplace', place)
    } catch (err) {
        console.log(err)
    }
}

exports.editPlace = async(req, res) => {
    try {
        const { id } = req.params
        const { name, user } = req.body
        await Place.findByIdAndUpdate(id, { name, image: req.file.path, ownerId: user }, { new: false })
        res.redirect('/private/myplace')
    } catch (err) {
        console.log(err)
    }
}

exports.deletePlace = async(req, res) => {
    try {
        const { id } = req.params
        await Place.findByIdAndRemove(id)
        res.redirect('/private/myplace')
    } catch (err) {
        console.log(err)
    }
}

// GENERAL pages

exports.ProfileView = (req, res, next) => {
    res.render('private/profile')
}

exports.myVolunteeringsView = (req, res, next) => {
    res.render('private/volunteerings')
}

exports.myCartView = (req, res, next) => {
    res.render('private/checkout')
}