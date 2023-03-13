const express = require('express'); /*ruta en comun*/

const mainController = require('../controllers/mainController'); //ruta que necesito

const router = express.Router(); //ruta en comun

router.get('/', mainController.index); //el metodo GET pide una vista

router.get('/cart', mainController.cart);

router.get('/createProduct',mainController.createProduct);


router.get('/login',mainController.login);

router.get('/register',mainController.register);

// router.get('/productDetail',mainController.productDetail);// hay que crear una pagina que lleve a todos los productos
// dejar estar ruta siempre abajo de las demas
router.get('/:id',mainController.productDetail);


module.exports = router; //ruta en comun