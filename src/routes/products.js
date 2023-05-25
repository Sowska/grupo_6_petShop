const express = require('express');

const router = express.Router(); //ruta en comun

const productsController = require('../controllers/productsController');
const uploadFile = require('../middlewares/multer');
const authMiddleware = require ('../middlewares/authMiddleware');
const productValidations = require('../middlewares/productValidations')

router.get('/', productsController.allProducts); 

router.get('/create',authMiddleware, productsController.createForm);
router.post('/', uploadFile.single('new-product-img'), productsController.create); 

router.get('/:id', productsController.detail);

router.get('/:id/edit', authMiddleware, productsController.edit); 
router.put('/:id', uploadFile.single('new-product'), productsController.update);

router.delete('/:id', productsController.destroy); 

module.exports = router;
