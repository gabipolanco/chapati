const express = require('express');
const router = express.Router();
const {signUpBackpackerView,signUpHostView}= require('../controllers/auth')


router.get('/signuphost', signUpHostView)
router.get('/signupbackpacker', signUpBackpackerView)
