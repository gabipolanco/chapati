const express = require('express')
const router = express.Router()

const {
    homeView,
    storeView,
    placesView,
    chapatiGalleryView,
    peopleGalleryView,
    contactView
} = require('../controllers/index')

/* GET home page */
router.get('/', homeView)
router.get('/home', homeView)

// Galleries

router.get('/chapatigallery', chapatiGalleryView)
router.get('/peoplegallery', peopleGalleryView)

// Store

router.get('/store', storeView)

// Places

router.get('/places', placesView)

// Contact

router.get('/contact', contactView)


module.exports = router;