module.exports = (sequelize, dataTypes) => {
    let alias = "Cart";
    let cols = {
        id: {
            type: dataType.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,

        },
        created_at: {
            type: dataTypes.DATE,
            allowNull: false
        },
        user_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        total: {
            type: dataTypes.DECIMAL(10,2),
            allowNull: false,
        }
    };

    let config = {
        tableName: "carts",
        timestamps: false,
    };
    const Cart = sequelize.define(alias, cols, config)

    Cart.associate = (models) => {
        Cart.belongsTo(models.User, { //listo
            as: 'user',
            foreignKey: 'user_id'
        });
    
        Cart.belongsTo(models.Order, { //listo
            as: 'order',
            foreignKey: 'cart_id_orders'
        });
    
        Cart.hasMany(models.Cart_item, { //listo
            as: 'cart_item',
            foreignKey: 'cart_id'
        });
    }

    return Cart;
}