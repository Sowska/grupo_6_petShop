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
        },
        product_id_images: {
            type: dataType.INTEGER(11)
        }
 
    }
    const config = {
        tableName: 'product_images',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
     const Product_image = sequelize.define (cols, config, alias)

     Product_image.associate = (models) => {
        Product_image.HasMany(models.Product, {
            as: 'product',
            foreigKey: 'product_images'
        });
     }

     return Product_image;

}