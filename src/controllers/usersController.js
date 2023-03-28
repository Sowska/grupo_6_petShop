<<<<<<< HEAD
const fs = require('fs');
const path = require('path');

const User = require ('../models/user');

function getUsers(){
	return JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
} //esta funcion permite actualizar la lista de usuarios para cada accion del CRUD.


const productsFilePath = path.join(__dirname, '../data/users.json');
=======
const { validationResult } = require('express-validator');
>>>>>>> main

const controller = {
    login: (req,res)=>{
        res.render('login');
    },

    register: (req,res)=>{
<<<<<<< HEAD
        res.render('register');
    },
    procerRegister: (req,res) =>{
        const imagen = req.file ? req.file.fileName : "imagenDefaul.png"; //falta el multer
        const users = getUsers(); // almacenar todos los usuarios dentro de esta funcion
        const newUser = {
            firstName
        }
    }
=======
        return res.render('register');
    },

    login: (req,res)=>{
        return res.render('login');
    }

>>>>>>> main
}

module.exports = controller;