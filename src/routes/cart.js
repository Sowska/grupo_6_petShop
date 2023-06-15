const express = require('express');
const cartController = require('../controllers/cartController');
const router = express.Router();
const authMiddleware = require ('../middlewares/authMiddleware');

router.get('/', authMiddleware, cartController.cart);
router.post('/add-product/:id', cartController.addProduct);

module.exports = router;