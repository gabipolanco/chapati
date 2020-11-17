const express = require('express');
const router = express.Router();
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


router.get('/signuphost', signUpHostView)
router.get('/signupbackpacker', signUpBackpackerView)
router.post('/signup', signUpProcess)
router.post('/login', loginProcess)
router.get('/logout', logoutProcess)

router.get("/google", googleInit)
router.get("/google/callback", googleCb)

router.get("/facebook", facebookInit)
router.get("/facebook/callback", facebookCb)

module.exports = router;