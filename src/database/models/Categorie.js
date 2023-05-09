module.exports = (sequelize,dataType) =>{
    const alias = 'Categorie'; // Este nombre tiene que ser igual al nombre del archivo
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
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
     const Categorie = sequelize.define (cols, config, alias)

     Categorie.associate = (models) => {
        Categorie.BelongsTo(models.Product, {
            as: 'product',
            foreigKey: 'category_id'
        });
     }

     return Categorie;

}