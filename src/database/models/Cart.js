module.exports = (sequelize, dataTypes) => {
    let alias = "Cart";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
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

    return Cart;
}