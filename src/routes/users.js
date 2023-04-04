const express = require('express');
const { check } = require('express-validator');

const usersController = require('../controllers/usersController');

const router = express.Router();

router.get('/login',usersController.login);
router.post('/login', [
    check('email').isEmail().withMessage('email incorrecto'),
    check('password').isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres'),
] ,usersController.processLogin);

router.get('/check', function(req, res) {
    if(req.session.usuarioLogueado == undefined) {
    res.send ("Aún no estas logueado");
}else{
    res.send ("El usuario logueado es " + req.session.usuarioLogueado.email);
}
    })

router.get('/register',usersController.register);




module.exports = router;

