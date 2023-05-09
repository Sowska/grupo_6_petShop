module.exports = (sequelize,dataType) =>{
    const alias = 'Cart'; // Este nombre tiene que ser igual al nombre del archivo
    const cols = {
        id: {
            type: dataType.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: dataType.INTERGER(11),
        },
        total: {
            type: dataType.DECIMAL(10,2)
        }
 
    }
    const config = {
        tableName: 'cart',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
     const Cart = sequelize.define (cols, config, alias)


     Cart.associate = (models) => {
        Cart.HasMany(models.User, {
            as: 'user',
            foreigKey: 'user_id'
        });
     }

     Cart.associate = (models) => {
        Cart.BelongsTo(models.Order, {
            as: 'order',
            foreigKey: 'cart_id_orders'
        });
     }

     Cart.associate = (models) => {
        Cart.BelongsTo(models.Cart_item, {
            as: 'cart_item',
            foreigKey: 'cart_id'
        });
     }

     return Cart;

}