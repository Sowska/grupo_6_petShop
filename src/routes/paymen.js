const express = require('express');
const controllerMercadopago = require('../controllers/mercadopagoController');

const router = express.Router(); 


router.post('/create-order',controllerMercadopago.createOrder)

router.get('/success', (req,res)=> res.send('pago exitoso'))

router.get('/failure')

router.get('/pending')

router.post('/webhook', controllerMercadopago.receiveWebhook)


module.exports = router;