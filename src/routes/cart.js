const express = require('express');
const cartController = require('../controllers/cartController');
const router = express.Router();

router.post('/addProduct', cartController.addProduct); 