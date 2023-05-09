module.exports = (sequelize,dataType) =>{
    const alias = 'Order'; // Este nombre tiene que ser igual al nombre del archivo
    const cols = {
        id: {
            type: dataType.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        status: {
            type: dataType.INTERGER(),
        },
        cart_id: {
            type: dataType.INTERGER()
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

     return Order;

}