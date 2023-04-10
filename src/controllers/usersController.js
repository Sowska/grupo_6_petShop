const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');

function getUsers(){
	return JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
}


const User = require('../models/User');
const bcryptjs = require('bcryptjs');

const { empty } = require('statuses');

const controller = {

    register: (req, res) => {
        return res.render('register');
    },

    login: (req, res) => {
        return res.render('login');
    },

    processLogin: (req, res) => {
        let userToLogin = User.findByField('email', req.body.email);

        if (userToLogin) {
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (isOkThePassword) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                if (req.body.recordame) {
                    res.cookie('userEmail', req.body.email, { maxAge: 1000 * 60 })
                }



                return res.redirect('/home');
            }

        return res.render('login', {
            errors: {
                email: {
                    msg: 'Las credenciales son invalidas'
                }
            }
        })

    
        return res.render('login', {
        errors: {
            email: {
                msg: 'Correo electronico incorrecto'
            }
        }
    });

},

    profile: (req, res) => {
    return res.render('profile');
        
},

}

module.exports = controller;