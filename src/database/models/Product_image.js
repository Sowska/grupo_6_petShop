module.exports = (sequelize,dataType) =>{
    const alias = 'Product_image'; // Este nombre tiene que ser igual al nombre del archivo
    const cols = {
        id: {
            type: dataType.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        url: {
            type: dataType.STRING(45),
            allowNull: false
        },
        product_id_images: {
            type: dataType.INTEGER(11),
            allowNull: false
        }

    }
    const config = {
        tableName: 'product_images',
        timestamps:false
    }
    const Product_image = sequelize.define(alias, cols, config)

    Product_image.associate = (models) => {
        Product_image.belongsTo(models.Product, { //listo
            as: 'product',
            foreignKey: 'product_id_images'
        });
    }

    return Product_image;

}