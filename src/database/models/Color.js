module.exports = (sequelize,dataType) =>{
    const alias = 'Color';
    const cols = {
        id: {
            type: dataType.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        value: {
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
        Color.hasMany(models.Product, { //listo
            as: 'product',
            foreignKey: 'color_id'
        });
    }

    return Color;

}