module.exports = (sequelize,dataType) =>{
    const alias = 'Cart_item'; // Este nombre tiene que ser igual al nombre del archivo
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
        Cart_item.HasMany(models.Cart, {
            as: 'cart',
            foreigKey: 'cart_id'
        });
     }

     Cart_item.associate = (models) => {
        Cart_item.HasMany(models.Product, {
            as: 'product',
            foreigKey: 'product_id'
        });
     }

     return Cart_item;

}