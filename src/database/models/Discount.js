module.exports = (sequelize, dataTypes) => {
    let alias = "Discounts";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        percentage: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };

    let config = {
        tableName: "discounts",
        timestamps: false,
    };
    const Discount = sequelize.define(alias, cols, config)

    return Discount;
}