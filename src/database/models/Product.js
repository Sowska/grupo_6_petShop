module.exports = (sequelize,dataType) =>{
    const alias = 'Product'; // Este nombre tiene que ser igual al nombre del archivo
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
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
     const Product = sequelize.define (cols, config, alias)

     Product.associate = (models) => {
        Product.HasMany(models.Material, {
            as: 'material',
            foreigKey: 'material_id'
        });
     }

     Product.associate = (models) => {
        Product.HasMany(models.Categorie, {
            as: 'categorie',
            foreigKey: 'category_id'
        });
     }

     Product.associate = (models) => {
        Product.HasMany(models.Discount, {
            as: 'discount',
            foreigKey: 'discount_id'
        });
     }

     Product.associate = (models) => {
        Product.HasMany(models.Color, {
            as: 'color',
            foreigKey: 'color_id'
        });
     }

     Product.associate = (models) => {
        Product.BelongsTo(models.Product_image, {
            as: 'product_image',
            foreigKey: 'product_images'
        });
     }

     Product.associate = (models) => {
        Product.BelongsTo(models.Cart_item, {
            as: 'cart_item',
            foreigKey: 'product_id'
        });
     }

     return Product;

}