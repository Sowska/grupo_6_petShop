const express = require('express');
const path = require('path');
const router = express.Router(); //ruta en comun

const userController = require('../controllers/userController');

router.get('/login',userController.login); //login

router.get('/register',userController.register); //register

// ver como arreglar la ulr para que no tenga que poner register/register

module.exports = router;
