exports.isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next()
    } else {
        res.redirect("/")
    }
}

exports.checkRoles = roles => (req, res, next) => {
    if (roles.includes(req.user.role)) {
        return next()
    } else {
        res.redirect("/")
    }
}