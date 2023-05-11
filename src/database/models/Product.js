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
            type: dataType.TINYINT(4),
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
        discount_id: {
            type: dataType.INTERGER(11)
        },
        material: {
            type: dataType.STRING(11),
            allowNull: false
        },
        category_id: {
            type: dataType.INTERGER(11),
            allowNull: false
        },
        color_id: {
            type: dataType.INTERGER(11),
            allowNull: false
        }
    }
    const config = {
        tableName: 'products',
        timestamps: false
    }
    const Product = sequelize.define (cols, config, alias)

    Product.associate = (models) => {
        Product.belongsTo(models.Material, { //listo
            as: 'material',
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
    
        Product.belongsTo(models.Color, { //listo
            as: 'color',
            foreignKey: 'color_id'
        });
    
        Product.hasMany(models.Product_image, { //listo
            as: 'product_image',
            foreignKey: 'product_id_images'
        });
    
        Product.hasMany(models.Cart_item, { //listo
            as: 'cart_item',
            foreignKey: 'product_id'
        });
    }

    return Product;
}