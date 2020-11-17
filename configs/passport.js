const bcrypt = require("bcrypt")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const GoogleStrategy = require("passport-google-oauth20").Strategy
const FacebookStrategy = require("passport-facebook").Strategy
const User = require("../models/User")

passport.use(
    new LocalStrategy({
            usernameField: "email",
            passwordField: "password"
        },
        async(email, password, done) => {
            try {
                const user = await User.findOne({ email })
                if (!user) {
                    return done(null, false, { message: "Incorrect email" })
                }
                if (!bcrypt.compareSync(password, user.password)) {
                    return done(null, false, { message: "Incorrect password" })
                }
                done(null, user)
            } catch (err) {
                console.log(err)
            }
        }
    )
)

passport.serializeUser((user, cb) => {
    cb(null, user._id)
})

passport.deserializeUser(async(id, cb) => {
    try {
        const user = await User.findById(id)
        if (user) {
            user.password = null
        }
        cb(null, user)
    } catch (err) {
        console.log(err)
    }
})

passport.use(
    new GoogleStrategy({
            clientID: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: "/auth/google/callback"
        },
        async(_, __, profile, done) => {
            try {
                const user = await User.findOne({ googleId: profile.id })

                if (user) {
                    return done(null, user)
                }

                const newUser = await User.create({
                    googleId: profile.id,
                    email: profile.emails[0].value
                })

                done(null, newUser)
            } catch (err) {
                console.log(err)
            }
        }
    )
)

passport.use(
    new FacebookStrategy({
            clientID: process.env.FACEBOOK_APP_ID,
            clientSecret: process.env.FACEBOOK_APP_SECRET,
            callbackURL: "/auth/facebook/callback"
        },
        async(_, __, profile, done) => {
            try {
                const user = await User.findOne({ facebookId: profile.id })
                if (user) {
                    return done(null, user)
                }

                const newUser = await User.create({
                    facebookId: profile.id,
                    // email: profile.emails[0].value
                })

                done(null, newUser)
            } catch (err) {
                console.log(err)
            }
        }
    ));

module.exports = passport