module.exports = (sequelize,dataType) =>{
    const alias = 'Discount';
    const cols = {
        id: {
            type: dataType.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        percentage: {
            type: dataType.INTERGER(2),
            allowNull: false
        }

    }
    const config = {
        tableName: 'discounts',
        timestamps: false,
        deletedAt: false
    }
    const Discount = sequelize.define (cols, config, alias)

    Discount.associate = (models) => {
        Discount.hasMany(models.Product, { //listo
            as: 'product',
            foreignKey: 'discount_id'
        });
    }

    return Discount;

}