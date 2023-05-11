module.exports = (sequelize,dataType) =>{
    const alias = 'Category';
    const cols = {
        id: {
            type: dataType.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        product_type: {
            type: dataType.STRING(45),
        }

    }
    const config = {
        tableName: 'categories',
        timestamps: false
    }
    const Category = sequelize.define(alias, cols, config)

    Category.associate = (models) => {
        Category.hasMany(models.Product, { //listo
            as: 'product',
            foreignKey: 'category_id'
        });
    }

    return Category;

}