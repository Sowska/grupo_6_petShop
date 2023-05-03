const User = require('../models/User');

function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;

    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true;
    }

    let emailCookie = req.res.userEmail;
    let cookieUser = User.findByField('email', emailCookie);

    if(cookieUser){
        req.session.userLogged = cookieUser;
    }

    next();
}

module.exports = userLoggedMiddleware;