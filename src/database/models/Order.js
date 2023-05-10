module.exports = (sequelize, dataTypes) => {
    let alias = "Orders";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        status: {
            type: dataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1 // 1:pendiente, 2:comprado
        },
        cart_id_orders: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
            model: 'carts',
            key: 'id'
            }
        },
    };

    let config = {
        tableName: "orders",
        timestamps: false,
    };
    const Order = sequelize.define(alias, cols, config)

    return Order;
}