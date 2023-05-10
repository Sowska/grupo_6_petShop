module.exports = (sequelize, dataTypes) => {
    let alias = "Categories";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        product_type: {
            type: dataTypes.STRING,
            allowNull: false
        }
    };

    let config = {
        tableName: "categories",
        timestamps: false,
    };
    const Category = sequelize.define(alias, cols, config)

    return Category;
}