const bcrypt = require('bcrypt')
const User = require('../models/User')
const passport = require('../configs/passport')

exports.signUpHostView = (req, res, next) => {
    res.render('auth/signUp', { role: 'host', info2: 'Contectá con viajeros', info3: 'Comparte e intercambia' })
}

exports.signUpBackpackerView = (req, res, next) => {
    res.render('auth/signUp', { role: 'viajero', info2: 'Contectá con comunidades', info3: 'Viaja y aprende' })
}

exports.signUpProcess = async(req, res) => {
    try {
        const { email, password, role } = req.body
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
            password: hashPass,
            role
        })
        res.redirect("/")
    } catch (err) {
        console.log(err)
    }
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
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
})

exports.facebookInit = passport.authenticate('facebook', {
    scope: ["email"]
})

exports.facebookCb = passport.authenticate("facebook", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
})