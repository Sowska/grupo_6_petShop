module.exports = (sequelize,dataType) =>{
    const alias = 'CartItem';
    const cols = {
        id: {
            type: dataType.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: {
            type: dataType.INTEGER(2),
        },
        cart_id: {
            type: dataType.INTEGER(11)
        },
        product_id: {
            type: dataType.INTEGER(11)
        }

    }
    const config = {
        tableName: 'cartItem',
        timestamps: false
    }
    const CartItem = sequelize.define(alias, cols, config)

    
    CartItem.associate = (models) => {
        CartItem.belongsTo(models.Cart, { //listo
            as: 'cart',
            foreignKey: 'cart_id'
        });

        CartItem.belongsTo(models.Product, { //listo
            as: 'product',
            foreignKey: 'product_id'
        });
    }

    return CartItem;

}