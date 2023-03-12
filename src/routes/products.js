const express = require('express');
const path = require('path');
const router = express.Router(); //ruta en comun

const productsController = require('../controllers/productsController');


/*** Ver todos los productos ***/
router.get('/', productsController.allProducts); 

/*** Crear un producto***/

/*** Ver el detalle de un producto ***/
router.get('/detail/:id', productsController.detail);

/*** Editar un producto ***/

/*** Eliminar un producto***/

module.exports = router;