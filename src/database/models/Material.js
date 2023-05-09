module.exports = (sequelize,dataType) =>{
    const alias = 'Material'; // Este nombre tiene que ser igual al nombre del archivo
    const cols = {
        id: {
            type: dataType.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        value: {
            type: dataType.STRING(45),
        }
 
    }
    const config = {
        tableName: 'materials',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
     const Material = sequelize.define (cols, config, alias)

     Material.associate = (models) => {
        Material.BelongsTo(models.Product, {
            as: 'Product',
            foreigKey: 'material_id'
        });
     }

     return Material;

}