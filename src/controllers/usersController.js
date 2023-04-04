const { validationResult } = require('express-validator');
const { empty } = require('statuses');

const controller = {

    register: (req,res)=>{
        return res.render('register');
    },

    login: (req,res)=>{
        return res.render('login');
    },

    processLogin: function (req,res) {
       let errors = validationResult (req);
       const fs = require('fs');
       if  (errors.isEmpty()){

        let usersJSON = fs.readFileSync ('users.json', { encoding: 'utf-8' });
        let users; 
       
        if (usersJSON == "") {
            users =[];
        } else{
            users = JSON.parse(usersJSON);
        }
        let usuarioALoguearse

        for( let i = 0; i < users.length; i++) {
            if (users[i].email == req.body.email) {
                if(bcrypt.compareSync(req.body.password, users[i].password)) {
                usuarioALoguearse = users[i];
                break;
                }
            }
        }
         if (usuarioALoguearse == undefined) {
        return res.render('login', {errors: [
            {msg: 'Credenciales invalidas'}

        ]});
    }

    req.session.usuarioLogueado = usuarioALoguearse;

    if (req.body.recordame != undefined){
        res.cookie ('recordame', usuarioALoguearse.email, {maxAge: 60000 })
    }


    res.render('success');

       } else {
         return res.render('login', {errors: errors.errors});
       }
    }
}

module.exports = controller;