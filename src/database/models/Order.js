module.exports = (sequelize,dataType) =>{
    const alias = 'Order';
    const cols = {
        id: {
            type: dataType.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        status: {
            type: dataType.INTEGER(11),
            allowNull: false
        },
        cart_id_orders: {
            type: dataType.INTEGER(11),
            allowNull: false
        }

    }
    const config = {
        tableName: 'orders',
        timestamps:false
    }
    const Order = sequelize.define(alias, cols, config)

    Order.associate = (models) => { 
        Order.hasMany(models.Cart, { //listo
            as: 'cart',
            foreignKey: 'cart_id_orders'
        });
    }

    return Order;

}