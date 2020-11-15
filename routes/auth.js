const express = require('express');
const router = express.Router();
const {
    signUpHostView,
    signUpHostProcess,
    signUpBackpackerView,
    signUpBackpackerProcess,
    loginProcess,
    logoutProcess,
    googleInit,
    googleCb,
    facebookInit,
    facebookCb
} = require('../controllers/auth')


router.get('/signuphost', signUpHostView)
router.post('/signuphost', signUpHostProcess)
router.get('/signupbackpacker', signUpBackpackerView)
router.post('/signupbackpacker', signUpBackpackerProcess)
router.post('/login', loginProcess)
router.get('/logout', logoutProcess)

router.get("/google", googleInit)
router.get("/google/callback", googleCb)

router.get("/facebook", facebookInit)
router.get("/facebook/callback", facebookCb)

module.exports = router;