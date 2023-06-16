const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();
const guestMiddleware = require ('../middlewares/guestMiddleware');
const authMiddleware = require ('../middlewares/authMiddleware');
const uploadFile = require('../middlewares/multer');
const validator =  require('../middlewares/userValidations');
const { register, result} = require('../middlewares/formValidationMiddleware')

router.get('/login', guestMiddleware, usersController.login);

router.post('/login', usersController.processLogin);

router.get('/register', guestMiddleware, usersController.register);

router.post('/register', uploadFile.single("profile_pic"), register, result, usersController.store);

router.get('login',guestMiddleware, usersController.login);

router.post('/processLogin', validator.login, usersController.processLogin);

router.get('/profile', authMiddleware, usersController.profile);

router.get('/:id/edit', usersController.edit); 
router.put('/:id', uploadFile.single('new-avatar'), usersController.update);

router.delete('/:id', usersController.destroy); 

router.get('/logout', usersController.logout);

router.get('/all', authMiddleware, usersController.allUsers);

module.exports = router;

