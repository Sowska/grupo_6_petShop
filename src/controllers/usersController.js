const { validationResult } = require('express-validator');

const User = require('../models/User');


const { empty } = require('statuses');

const controller = {

    register: (req,res)=>{
        return res.render('register');
    },

    login: (req,res)=>{
        return res.render('login');
    },

    processLogin: (req,res)=>{
        let userToLogin = User.findByField('email', req.body.email);

        if (userToLogin) {
            let isOkThePassword = true;
           if (isOkThePassword) {
            delete userToLogin.password;
            req.session.userLogged = userToLogin;

            if (req.body.recordame) {
                res.cookie('userEmail', req.body.email, { maxAge: 1000 * 60})
            }



            return res.redirect ('/');
           }

           

        }
        return res.render('login', {
            errors: {
                email: {
                    msg: 'Las credenciales son invalidas'
                }
            }

    });

},

profile: (req,res)=>{
    return res.render('profile');
        
},

}

module.exports = controller;