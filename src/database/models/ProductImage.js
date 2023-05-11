module.exports = (sequelize, dataTypes) => {
    let alias = "Materials";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        url: {
            type: dataTypes.STRING,
            allowNull: false
        },
        product_id_images: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
            model: 'products',
            key: 'id'
            }
    }
}

    let config = {
        tableName: "product_images",
        timestamps: false,
    };
    const ProductImage = sequelize.define(alias, cols, config)

    return ProductImage;
}