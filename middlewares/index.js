exports.isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next()
    } else {
        res.redirect("/auth/signupbackpacker")
    }
}

exports.checkRoles = roles => (req, res, next) => {
    if (roles.includes(req.user.role)) {
        return next()
    } else {
        res.redirect("/")
    }
}

exports.bindUserToViewLocals = (req, res, next) => {
    res.locals.user = req.user;
    next();
}