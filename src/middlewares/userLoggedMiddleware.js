const db = require('../database/models');

function userLoggedMiddleware(req, res, next) {
    
    res.locals.isLogged = false;

    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true;
    }

    let emailCookie = req.res.userEmail;
    let cookieUser = db.User.findOne({
        where: {
        email: emailCookie
        }
    })
    .then(function(user) {
    return user;
        
    })
    

    if(cookieUser){
        req.session.userLogged = cookieUser;
    }

    next();
}

module.exports = userLoggedMiddleware;