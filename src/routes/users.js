const express = require('express');
const { check } = require('express-validator');

const usersController = require('../controllers/usersController');

const router = express.Router();

const guestMiddleware = require ('../middlewares/guestMiddleware');

router.get('/login', guestMiddleware, usersController.login);
router.post('/login', usersController.processLogin);

router.get('/userProfile', usersController.profile);

router.get('/register',usersController.register);



module.exports = router;

