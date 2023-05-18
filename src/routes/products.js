const express = require('express');

const router = express.Router(); //ruta en comun

const productsController = require('../controllers/productsController');
const uploadFile = require('../middlewares/multer');
const authMiddleware = require ('../middlewares/authMiddleware');


/*** Ver todos los productos ***/
router.get('/', productsController.allProducts); 

/*** Crear un producto***/
router.get('/create',authMiddleware, productsController.createForm);
router.post('/', uploadFile.single('new-product-img'), productsController.create); 

/*** Ver el detalle de un producto ***/
router.get('/:id', productsController.detail);

/*** Editar un producto ***/
router.get('/:id/edit', productsController.edit); 
router.put('/:id', uploadFile.single('new-product'), productsController.update);

/*** Eliminar un producto***/
router.delete('/:id', productsController.destroy); 

module.exports = router;
