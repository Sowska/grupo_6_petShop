module.exports = (sequelize, dataTypes) => {
    let alias = "CartItems";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        quantity: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        cart_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
            model: 'carts',
            key: 'id'
            }
        },
        product_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
            model: 'products',
            key: 'id'
            }
        },
    };

    let config = {
        tableName: "cart_item",
        timestamps: false,
    };
    const CartItem = sequelize.define(alias, cols, config)

    return CartItem;
}