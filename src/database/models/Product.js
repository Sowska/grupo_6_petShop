module.exports = (sequelize,dataType) =>{
    const alias = 'Product';
    const cols = {
        id: {
            type: dataType.INTEGER(11).UNSIGNED,
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
            type: dataType.DECIMAL(10,2),
            allowNull: false,
        },
        inStock:{
            type: dataType.BOOLEAN,
            allowNull: false,
        },
        measure: {
            type: dataType.STRING(45),
            allowNull: true
        },
        flavor: {
            type: dataType.STRING(45),
            allowNull: true,
        },
        fragrance: {
            type: dataType.STRING(45),
            allowNull: true,
        },
        size: {
            type: dataType.CHAR(3),
            allowNull: true,
        },
        pet:{
            type: dataType.STRING(45)
        },
        mainImage: {
            type: dataType.TEXT
        },
        discount_id: {
            type: dataType.INTEGER(11).UNSIGNED,
            allowNull: true
        },
        material_id: {
            type: dataType.INTEGER(11).UNSIGNED,
            allowNull: true

        },
        category_id: {
            type: dataType.INTEGER(11).UNSIGNED,
            allowNull: true

        },
        creator:{
            type: dataType.INTEGER(11).UNSIGNED
        }

    }
    const config = {
        tableName: 'products',
        timestamps: false
    }
    const Product = sequelize.define(alias, cols, config)

    Product.associate = (models) => {
        Product.belongsTo(models.Material, { //listo
            as: 'kind', //se cambio el nombre de la asociacion por 'Error: Naming collision between attribute 'material' and association 'material' on model Product.'
            foreignKey: 'material_id'
        });
    
        Product.belongsTo(models.Category, { //listo
            as: 'category',
            foreignKey: 'category_id'
        });
    
        Product.belongsTo(models.Discount, { //listo
            as: 'discount',
            foreignKey: 'discount_id'
        });
    
        Product.belongsToMany(models.Color, { //listo
            as: 'color',
            through: 'productcolors',
            foreignKey: 'colorId',
        });
    
        Product.hasMany(models.Product_image, { //listo
            as: 'product_image',
            foreignKey: 'product_id_images'
        });
    
        Product.hasMany(models.Item, { //listo
            as: 'item',
            foreignKey: 'product_id'
        });

        Product.belongsTo(models.User, { //listo
            as: 'user',
            foreignKey: 'creator'
        });
    }

    return Product;
}