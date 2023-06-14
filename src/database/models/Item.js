module.exports = (sequelize,dataType) =>{
    const alias = 'Item';
    const cols = {
        id: {
            type: dataType.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: {
            type: dataType.INTEGER(2),
        },
        cart_id: {
            type: dataType.INTEGER(11).UNSIGNED
        },
        product_id: {
            type: dataType.INTEGER(11).UNSIGNED
        }

    }
    const config = {
        tableName: 'items',
        timestamps: false
    }
    const Item = sequelize.define(alias, cols, config)

    
    Item.associate = (models) => {
        Item.belongsTo(models.Cart, { //listo
            as: 'cart',
            foreignKey: 'cart_id',
            onDelete: 'CASCADE'
        });

        Item.belongsTo(models.Product, { //listo
            as: 'product',
            foreignKey: 'product_id',
            onDelete: 'CASCADE'
        });
    }

    return Item;

}