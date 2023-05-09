module.exports = (sequelize,dataType) =>{
    const alias = 'Cart'; // Este nombre tiene que ser igual al nombre del archivo
    const cols = {
        id: {
            type: dataType.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: dataType.INTERGER(),
        },
        total: {
            type: dataType.DECIMAL(9,2)
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

     return Cart;

}