const User = require('../models/User');

function rememberMiddleware (req, res, next) {

    let emailCookie = req.res.userEmail;
    let cookieUser = User.findByField('email', emailCookie);

    if(cookieUser){
        req.session.userLogged = cookieUser;
    }

    next();
    
    }


module.exports = rememberMiddleware;