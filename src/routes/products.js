const express = require('express');

const router = express.Router(); //ruta en comun

const productsController = require('../controllers/productsController');
const uploadFile = require('../middlewares/multer');
const authMiddleware = require ('../middlewares/authMiddleware');
const { result, newProductValidation} = require('../middlewares/formValidationMiddleware')

router.get('/', productsController.allProducts); 

router.get('/create',authMiddleware, productsController.createForm);
router.post('/', uploadFile.array('additional-product-img', 5), uploadFile.single('new-product-img'), newProductValidation, result, productsController.create); 

router.get('/:id', productsController.detail);

router.get('/:id/edit', authMiddleware, productsController.edit); 
router.put('/:id', uploadFile.single('edit-product-img'), productsController.update);

router.delete('/:id', productsController.destroy); 

module.exports = router;
