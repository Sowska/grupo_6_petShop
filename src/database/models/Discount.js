module.exports = (sequelize,dataType) =>{
    const alias = 'Discount';
    const cols = {
        id: {
            type: dataType.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        percentage: {
            type: dataType.INTEGER(2),
            allowNull: false
        }

    }
    const config = {
        tableName: 'discounts',
        timestamps: false,
        deletedAt: false
    }
    const Discount = sequelize.define(alias, cols, config)

    Discount.associate = (models) => {
        Discount.hasMany(models.Product, { //listo
            as: 'product',
            foreignKey: 'discount_id'
        });
    }

    return Discount;

}