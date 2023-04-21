const express = require('express');
const { check } = require('express-validator');


const usersController = require('../controllers/usersController');

const router = express.Router();

const guestMiddleware = require ('../middlewares/guestMiddleware');
const authMiddleware = require ('../middlewares/authMiddleware');

router.get('/login', guestMiddleware, usersController.login);
router.post('/login', usersController.processLogin);

const uploadFile = require('../middlewares/multer');
const validator =  require('../middlewares/userValidations');


router.get('/register', guestMiddleware, usersController.register);

router.post('/register', validator.validatorCreateForm, usersController.store);

router.get('login',guestMiddleware, usersController.login);

router.post('/processLogin', validator.login, usersController.processLogin);

router.get('/profile', authMiddleware, usersController.profile);

/*** Editar un usuario ***/
router.get('/:id/edit', usersController.edit); 
router.put('/:id', uploadFile.single('new-avatar'), usersController.update);

/*** Eliminar un usuario***/
router.delete('/:id', usersController.destroy); 

module.exports = router;

