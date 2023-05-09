module.exports = (sequelize,dataType) =>{
    const alias = 'Product_image'; // Este nombre tiene que ser igual al nombre del archivo
    const cols = {
        id: {
            type: dataType.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        value: {
            type: dataType.STRING(45),
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

     return Product_image;

}