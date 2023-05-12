module.exports = (sequelize,dataType) =>{
    const alias = 'Color';
    const cols = {
        id: {
            type: dataType.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataType.STRING(45),
            allowNull: false
        }

    }
    const config = {
        tableName: 'colors',
        timestamps: false,
    }
    const Color = sequelize.define(alias, cols, config)

    Color.associate = (models) => {
        Color.belongsToMany(models.Product, { //listo
            as: 'product',
            through: 'product_colors',
            foreignKey: 'color_id',
            otherKey: 'product_id'
        });
    }

    return Color;

}