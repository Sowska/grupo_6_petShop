module.exports = (sequelize,dataType) =>{
    const alias = 'Cart_item';
    const cols = {
        id: {
            type: dataType.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: {
            type: dataType.INTERGER(2),
        },
        cart_id: {
            type: dataType.INTEGER(11)
        },
        product_id: {
            type: dataType.INTEGER(11)
        }

    }
    const config = {
        tableName: 'cart_item',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Cart_item = sequelize.define (cols, config, alias)

    
    Cart_item.associate = (models) => {
        Cart_item.belongsTo(models.Cart, { //listo
            as: 'cart',
            foreignKey: 'cart_id'
        });

        Cart_item.belongsTo(models.Product, { //listo
            as: 'product',
            foreignKey: 'product_id'
        });
    }

    return Cart_item;

}