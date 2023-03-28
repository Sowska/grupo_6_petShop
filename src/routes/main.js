const express = require('express'); /*ruta en comun*/

const mainController = require('../controllers/mainController'); //ruta que necesito

const router = express.Router(); //ruta en comun

router.get('/', mainController.index); //el metodo GET pide una vista
router.get('/cart', mainController.cart);
router.get('/createProduct',mainController.createProduct);
/* router.get('/productDetail',mainController.productDetail); */
// router.get('/login',mainController.login);
// router.get('/register',mainController.register);

module.exports = router; //ruta en comun