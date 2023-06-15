const express = require('express');
const controllerMercadopago = require('../controllers/mercadopagoController');

const router = express.Router(); 


router.post('/create-order',controllerMercadopago.createOrder)

router.get('/success')

router.get('/failure')

router.get('/pending')

router.post('/webhook', controllerMercadopago.receiveWebhook)


module.exports = router;