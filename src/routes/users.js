const express = require('express');

const usersController = require('../controllers/usersController');

const router = express.Router();

//Formulario de ingreso
router.get('/login',usersController.login);

//Formulario de creación
router.get('/register',usersController.register);

//Procesamiento del formulario de creacion
router.post('/', validateUserForm, usersController.store);

//Detalle de un Usuario


//Todos los usuarios






module.exports = router;