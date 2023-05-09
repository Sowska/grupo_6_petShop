module.exports = (sequelize,dataType) =>{
    const alias = 'Discount'; // Este nombre tiene que ser igual al nombre del archivo
    const cols = {
        id: {
            type: dataType.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        percentage: {
            type: dataType.INTERGER(2),
        }
 
    }
    const config = {
        tableName: 'discounts',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
     const Discount = sequelize.define (cols, config, alias)

     Discount.associate = (models) => {
        Discount.BelongsTo(models.Product, {
            as: 'Product',
            foreigKey: 'discount_id'
        });
     }

     return Discount;

}