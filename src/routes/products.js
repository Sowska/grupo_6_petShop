const express = require('express');
const path = require('path');
const router = express.Router(); //ruta en comun

const productsController = require('../controllers/productsController');


/*** Ver todos los productos ***/
router.get('/', productsController.allProducts); 

/*** Crear un producto***/
router.get('/create', productsController.create);
router.post('/', productsController.store); 

/*** Ver el detalle de un producto ***/
router.get('/:id', productsController.detail);

/*** Editar un producto ***/
router.get('/:id/edit', productsController.edit); 
router.put('/:id', productsController.update);

/*** Eliminar un producto***/
router.delete('/:id', productsController.destroy); 

module.exports = router;