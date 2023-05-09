module.exports = (sequelize,dataType) =>{
    const alias = 'Product'; // Este nombre tiene que ser igual al nombre del archivo
    const cols = {
        id: {
            type: dataType.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataType.STRING(45),
            allowNull: false,
        },
        description:{
            type: dataType.STRING(45),
            allowNull: false,
        },
        price:{
            type: dataType.DECIMAL(9,2),
            allowNull: false,
        },
        inStock:{
            type: dataType.INTEGER(),
            allowNull: false,
        },
        flavor: {
            type: dataType.STRING(45),
            allowNull: false,
        },
        fragrance: {
            type: dataType.STRING(45),
            allowNull: false,
        },
        size: {
            type: dataType.CHAR(1),
            allowNull: false,
        },
        image_url: {
            type: dataType.STRING()
        },
        discount_id: {
            type: dataType.INTERGER()
        },
        material: {
            type: dataType.STRING()
        },
        category_id: {
            type: dataType.INTERGER()
        },
        color_id: {
            type: dataType.INTERGER()
        }
    }
    const config = {
        tableName: 'products',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
     const Product = sequelize.define (cols, config, alias)

     return Product;

}