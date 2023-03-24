const { validationResult } = require('express-validator');

const controller = {

    register: (req,res)=>{
        return res.render('register');
    },

    login: (req,res)=>{
        return res.render('login');
    }

}

module.exports = controller;