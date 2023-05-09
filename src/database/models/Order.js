module.exports = (sequelize,dataType) =>{
    const alias = 'Order'; // Este nombre tiene que ser igual al nombre del archivo
    const cols = {
        id: {
            type: dataType.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        status: {
            type: dataType.INTERGER(11),
        },
        cart_id_orders: {
            type: dataType.INTERGER(11)
        }
 
    }
    const config = {
        tableName: 'orders',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
     const Order = sequelize.define (cols, config, alias)

     Order.associate = (models) => {
        Order.HasMany(models.Cart, {
            as: 'cart',
            foreigKey: 'cart_id_orders'
        });
     }

     return Order;

}