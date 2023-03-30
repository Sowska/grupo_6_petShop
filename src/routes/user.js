const express = require('express');
const path = require('path');
const router = express.Router(); //ruta en comun
const { body } = require('express-validator');

const userController = require('../controllers/userController');

const validatorCreateForm = [
    body('txtName').notEmpty().withMessage('llena el campo de nombre bobo'),
    body('txtLastname').notEmpty().withMessage('llena el campo de apellido bobo'),
    body().isEmail('txtEmail').withMessage('tiene que ser un email')

];

router.get('/login',userController.login); //login

router.get('/register',userController.register); //register

router.post('/register',userController.register); //register


// ver como arreglar la ulr para que no tenga que poner register/register

module.exports = router;
