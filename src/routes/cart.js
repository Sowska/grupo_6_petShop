const express = require('express');
const cartController = require('../controllers/cartController');
const router = express.Router();

router.get('/', cartController.cart);
router.post('/add-product/:id', cartController.addProduct);

module.exports = router;