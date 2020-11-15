const bcrypt = require('bcrypt')
const User = require('../models/User')
const passport = require('../configs/passport')

exports.signUpHostView = (req, res, next) => {
    res.render('auth/signUpHost')
}

exports.signUpHostProcess = (req, res, next) => {
    res.redirect('/')
}

exports.signUpBackpackerView = (req, res, next) => {
    res.render('auth/signUpBackpacker')
}

exports.signUpBackpackerProcess = async(req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.render("auth/signupbackpacker", {
            errorMessage: "Indicate email and password"
        })
    }
    const user = await User.findOne({ email })
    if (user) {
        return res.render("auth/signupbackpacker", {
            errorMessage: "Error"
        })
    }
    const salt = bcrypt.genSaltSync(12)
    const hashPass = bcrypt.hashSync(password, salt)
    await User.create({
        email,
        password: hashPass
    })
    res.redirect("/")
}

exports.loginProcess = passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/",
    failureFlash: true
})

exports.logoutProcess = (req, res, next) => {
    req.logout()
    res.redirect('/')
}

exports.googleInit = passport.authenticate("google", {
    scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"
    ]
})

exports.googleCb = passport.authenticate("google", {
    successRedirect: "/profile",
    failureRedirect: "/login",
    failureFlash: true
})

exports.facebookInit = passport.authenticate('facebook')

exports.facebookCb = passport.authenticate("facebook", {
    successRedirect: "/profile",
    failureRedirect: "/login",
    failureFlash: true
})