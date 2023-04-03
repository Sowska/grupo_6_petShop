// const fs = require('fs');
// const { validationResult } = require('express-validator');

// const path = require('path');

// const User = require ('../models/user');

// const usersFilePath = path.join(__dirname, '../data/users.json');

// function getUsers(){
// 	return JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
// } //esta funcion permite actualizar la lista de products para cada accion del CRUD.


// const controller = {
//     login: (req,res)=>{
//         res.render('login');
//     },

//     register: (req,res)=>{
//         res.render('register');
//     },
//     procerRegister: (req,res) =>{
//         let errors = validationResult(req);
//         if(errors.isEmpty()){
//             res.redirect('home')
//         }else{
//             res.render('register',{errors: errors.arrays()});
//         }


//         const imagen = req.file ? req.file.fileName : "imagenDefaul.png"; //falta el multer
//         const users = getUsers(); // almacenar todos los usuarios dentro de esta funcion
//         const newUser = {
//             firstName
//         }
//     }

// }

// module.exports = controller;