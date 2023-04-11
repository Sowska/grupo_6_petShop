const express = require('express');
const { check } = require('express-validator');


const usersController = require('../controllers/usersController');

const router = express.Router();

const guestMiddleware = require ('../middlewares/guestMiddleware');

router.get('/login', guestMiddleware, usersController.login);
router.post('/login', usersController.processLogin);

const uploadFile = require('../middlewares/multer');
const validator =  require('../middlewares/userValidations');


router.get('/register', usersController.register);

router.post('/', validator.validatorCreateForm, usersController.store);

router.get('login', usersController.login);

router.post("/processLogin", validator.login, usersController.processLogin);

router.get('/profile', usersController.profile);

/*** Editar un usuario ***/
router.get('/:id/edit', usersController.edit); 
router.put('/:id', uploadFile.single('new-avatar'), usersController.update);

/*** Eliminar un usuario***/
router.delete('/:id', usersController.destroy); 

module.exports = router;

