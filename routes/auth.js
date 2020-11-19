const express = require('express');
const router = express.Router();

const {
    isNotAuth
} = require('../middlewares/index')

const {
    signUpHostView,
    signUpProcess,
    signUpBackpackerView,
    loginProcess,
    logoutProcess,
    googleInit,
    googleCb,
    facebookInit,
    facebookCb
} = require('../controllers/auth')


router.get('/signuphost', isNotAuth, signUpHostView)
router.get('/signupbackpacker', isNotAuth, signUpBackpackerView)
router.post('/signup', signUpProcess)
router.post('/login', loginProcess)
router.get('/logout', logoutProcess)

router.get("/google", googleInit)
router.get("/google/callback", googleCb)

router.get("/facebook", facebookInit)
router.get("/facebook/callback", facebookCb)

module.exports = router;