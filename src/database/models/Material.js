module.exports = (sequelize,dataType) =>{
    const alias = 'Material';
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
        tableName: 'materials',
        timestamps: false
    }
    const Material = sequelize.define(alias, cols, config)

    Material.associate = (models) => {
        Material.hasMany(models.Product, { //listo
            as: 'product',
            foreignKey: 'material_id'
        });
    }

    return Material;

}