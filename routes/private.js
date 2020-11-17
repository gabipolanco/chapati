const express = require('express')
const router = express.Router()
const fileUploader = require('../configs/cloudinary')

const {
    checkRoles,
    isAuth
} = require('../middlewares/index')

const {
    myProductsView,
    createProduct,
    editProductView,
    editProduct,
    deleteProduct,
    myPlaceView,
    createPlace,
    editPlaceView,
    editPlace,
    deletePlace,
    ProfileView,
    myVolunteeringsView,
    myCartView
} = require('../controllers/private')

// HOST pages

router.get('/myproducts', isAuth, checkRoles(['host']), myProductsView)
router.post('/createproduct', isAuth, checkRoles(['host']), fileUploader.single('image'), createProduct)
router.get('/product/:id/edit', isAuth, checkRoles(['host']), editProductView)
router.post('/product/:id/edit', isAuth, checkRoles(['host']), fileUploader.single('image'), editProduct)
router.post('/product/:id/delete', isAuth, checkRoles(['host']), deleteProduct)
router.get('/myplace', isAuth, checkRoles(['host']), myPlaceView)
router.post('/createplace', isAuth, checkRoles(['host']), fileUploader.single('image'), createPlace)
router.get('/place/:id/edit', isAuth, checkRoles(['host']), editPlaceView)
router.post('/place/:id/edit', isAuth, checkRoles(['host']), fileUploader.single('image'), editPlace)
router.post('/place/:id/delete', isAuth, checkRoles(['host']), deletePlace)

// GENERAL pages

router.get('/profile', isAuth, ProfileView)
router.get('/myvolunteerings', isAuth, myVolunteeringsView)
router.get('/mycart', isAuth, myCartView)

module.exports = router;