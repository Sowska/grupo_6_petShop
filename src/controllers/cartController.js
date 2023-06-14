let db = require("../database/models");

const controller = {

    cart: async (req, res) => {

        const cart = await db.Cart.findOne({
            where: { user_id: req.session.userLogged.id },
            attributes: ['id', 'user_id', 'total'],
        });

        const items = await db.Item.findAll({
            where: { cart_id: cart.id },
            include: [
                {
                    association: 'product',
                    attributes: ['id', 'price', 'name', 'mainImage'],
                    include: [
                        {
                            association: 'discount',
                            attributes: ['percentage'],
                        },
                    ],
                },
            ],
        });

        let subtotal = 0;
        let totalDiscounts = 0;

        items.forEach((item) => {
            let discount = item.product.discount ? item.product.discount.percentage : 0;
            subtotal += parseFloat(item.product.price) * item.quantity;
            totalDiscounts += (item.product.price*discount)/100;
        });

        res.render('cart', {
            cart_id: cart.id,
            user_id: cart.user_id,
            total: cart.total,
            items,
            subtotal,
            totalDiscounts
        });
    },

    addProduct: async (req, res) => {


        try {
            let product = await db.Product.findByPk(req.params.id, {
                include: 'discount'
            });
            console.log("Este es el producto: " + product);
            let productId = req.params.id;
            let productDiscount = product.discount ? product.discount.percentage : 0;
            let productPrice = parseFloat(product.getDataValue('price'));
            let quantity = req.body.quantity;
            let newPrice = productDiscount != 0 ? ((productPrice * productDiscount) / 100) * quantity : productPrice * quantity;

            let carrito = await db.Cart.findOne({
                where: { user_id: req.session.userLogged.id },
                attributes: ['id', 'total']
            });

            if (carrito) {
                console.log("carrito encontrado");

                let updatedTotal = parseFloat(carrito.total) + parseFloat(newPrice);
                console.log("el precio de este carrito es: " + updatedTotal)

                const newItem = {
                    quantity: quantity,
                    cart_id: carrito.getDataValue('id'),
                    product_id: productId
                };

                await db.Cart.update(
                    { total: updatedTotal },
                    { where: { id: carrito.getDataValue('id') } }
                );

                db.Item.create(newItem).then(() => {
                    console.log("Producto añadido con éxito");
                });
            } else {
                console.log("carrito no encontrado");
                const newCarrito = db.Cart.build({
                    created_at: new Date(),
                    total: newPrice,
                    user_id: req.session.userLogged.id,
                });

                const item = db.Item.build({
                    quantity: quantity,
                    cart_id: newCarrito.id,
                    product_id: productId,

                });

                await newCarrito.save();
                item.cart_id = newCarrito.id;
                await item.save();
                await newOrder.save();

                console.log('Carrito creado y producto añadido');
            }
        } catch (error) {
            console.error('Error al agregar carrito', error);
            res.redirect('/user/login');
        }


    }
}

module.exports = controller;