const express = require('express');

const usersController = require('../controllers/usersController');

const router = express.Router();

//Todos los usuarios
router.get('/', usersController.allUsers);

//Formulario de ingreso
router.get('/login',usersController.login);

//Formulario de creación
router.get('/register',usersController.register);

//Procesamiento del formulario de creacion
router.post('/', usersController.store);

//Detalle de un Usuario
router.get('/:id', usersController.detail);

/*** Editar un usuario ***/
router.get('/:id/edit', usersController.edit); 
router.put('/:id', usersController.update);

/*** Eliminar un usuario***/
router.delete('/:id', usersController.destroy); 

module.exports = router;