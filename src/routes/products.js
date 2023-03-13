const express = require('express');
const path = require('path');
const router = express.Router(); //ruta en comun

const productsController = require('../controllers/productsController');


/*** Ver todos los productos ***/
router.get('/', productsController.allProducts); 

/*** Crear un producto***/

/*** Editar un producto ***/

/*** Eliminar un producto***/

/*** Ver el detalle de un producto ***/

router.get('/detail/:id',productsController.detail); // dejar estar ruta siempre abajo de las demas

module.exports = router;