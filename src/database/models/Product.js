module.exports = (sequelize, dataTypes) => {
    let alias = "Products";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false

        },
        description: {
            type: dataTypes.STRING,
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(10, 2), // 10 dígitos totales, 2 decimales
            allowNull: false
        },
        inStock: {
            type: dataTypes.TINYINT,
            allowNull: false,
            defaultValue: 1
        },
        flavor: {
            type: dataTypes.STRING,
            allowNull: true
        },

        fragrance: {
            type: dataTypes.STRING,
            allowNull: true
        },
        size: {
            type: dataTypes.CHAR(1),
            allowNull: true,

        }, 
        material_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
            model: 'materials',
            key: 'id'
            }
        },
        discount_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
            model: 'discounts',
            key: 'id'
            }
        },
        category_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
            model: 'categories',
            key: 'id'
            }
        },
        color_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
            model: 'colors',
            key: 'id'
            }
        },
    };

    let config = {
        tableName: "products",
        timestamps: false
    };
    const Product = sequelize.define(alias, cols, config)

    return Product;
}