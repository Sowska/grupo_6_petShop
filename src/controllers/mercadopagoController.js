// require('dotenv').config();
const mercadopago = require('mercadopago');
// let db = require("../database/models");



const controllerMercadopago = {


    createOrder: async (req, res) => {
		// let product = await db.Product.findByPk(req.params.id, {include: [{association: "discount"}, {association: "kind"}, {association: "category"}, {association: "user"} ]})

        mercadopago.configure({
            access_token: process.env.Mercado_API_KEY
        });

        const result = await mercadopago.preferences.create({
            items: [
                {
                    title: "title",
                    unit_price: 2,
                    currency_id: 'ARS',
                    quantity: 1,
                }
            ],
            back_urls: {
                success: 'http://localhost:3030/pago/success',
                failure: 'http://localhost:3030/failure',
                pending: 'http://localhost:3030/pending'
            },
            auto_return: 'all',
            notification_url: 'https://dcc0-190-195-164-76.sa.ngrok.io/webhook'
        });
        console.log(result);
        res.send(result.body)
    },

    receiveWebhook: async (req, res) => {

        try {
            const paymen = req.query;
            if (paymen.type === 'paymen') {
                const data = await mercadopago.payment.findById(paymen['data.id'])
                console.log(data);

                // ver si lo guardo en la DB
            }

            res.sendStatus(204);
        } catch (error) {
            console.log(error);
            return res.sendStatus(500).json({ error: error.message })
        }

    }
}

module.exports = controllerMercadopago;

