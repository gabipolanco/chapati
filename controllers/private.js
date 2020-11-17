const Place = require('../models/Place')
const Product = require('../models/Product')
const User = require('../models/User')
const Volunteering = require('../models/Volunteering')

// ===========================HOST pages============================

exports.myProductsView = async(req, res, next) => {
    try {
        const userId = req.user
        const user = await User.findById(userId).populate('productId')
        res.render('private/myProducts', user)
    } catch (err) {
        console.log(err)
    }
}

// CRUD product

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
        const { name, price, description } = req.body
        if (req.file) {
            const picture = req.file.path
            await Product.findByIdAndUpdate(id, { picture, name, description, price }, { new: false })
            res.redirect('/private/myproducts')
        } else {
            await Product.findByIdAndUpdate(id, { name, description, price }, { new: false })
            res.redirect('/private/myproducts')
        }
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

// CRUD place

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
        if (req.file) {
            const image = req.file.path
            await Place.findByIdAndUpdate(id, { name, image, ownerId: user }, { new: false })
            res.redirect('/private/myplace')
        } else {
            await Place.findByIdAndUpdate(id, { name, ownerId: user }, { new: false })
            res.redirect('/private/myplace')
        }

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

// ======================== GENERAL pages ============================

// Profile

exports.ProfileView = async(req, res, next) => {
    try {
        const userId = req.user
        const user = await User.findById(userId)
        if (user.role === 'host') {
            return res.render('private/hostprofile', user)
        }
        res.render('private/viajeroprofile', user)
    } catch (err) {
        console.log(err)
    }
}

// My volunteerings

exports.myVolunteeringsView = (req, res, next) => {
    res.render('private/volunteerings')
}

// My cart

exports.myCartView = async(req, res, next) => {
    const user = await User.findById(req.user)
    res.render('private/checkout', user)
}

exports.addProductToCart = async(req, res) => {
    try {
        const { id } = req.params
        const userId = req.user
        const { name, price } = await Product.findById(id)
        await User.findByIdAndUpdate(userId, { $push: { cart: { name, price } } })
        res.redirect('/store')
    } catch (err) {
        console.log(err)
    }
}

exports.deleteProductFromCart = async(req, res) => {
    try {
        const { id } = req.params
        const userId = req.user
        await User.findByIdAndUpdate(userId, { $pull: { cart: { _id: id } } })
        res.redirect('/private/mycart')
    } catch (err) {
        console.log(err)
    }
}