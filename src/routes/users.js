const express = require('express');
const { check } = require('express-validator');


const usersController = require('../controllers/usersController');

const router = express.Router();

const guestMiddleware = require ('../middlewares/guestMiddleware');

router.get('/login', guestMiddleware, usersController.login);
router.post('/login', usersController.processLogin);

const uploadFile = require('../middlewares/multer');
const validator =  require('../middlewares/userValidations');


router.get('/register',usersController.register);

//Procesamiento del formulario de creacion
router.post('/', usersController.store);

//Autenticacion de usuario logeado
router.post("/successLogin", validator.login, usersController.processLogin)
//Detalle de un Usuario
router.get('/:id', usersController.detail);

/*** Editar un usuario ***/
router.get('/:id/edit', usersController.edit); 
router.put('/:id', uploadFile.single('new-avatar'), usersController.update);

/*** Eliminar un usuario***/
router.delete('/:id', usersController.destroy); 

module.exports = router;

