module.exports = (sequelize,dataType) =>{
    const alias = 'Rol'; // Este nombre tiene que ser igual al nombre del archivo
    const cols = {
        id: {
            type: dataType.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        role: {
            type: dataType.INTERGER(),
        }
 
    }
    const config = {
        tableName: 'roles',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
     const Rol = sequelize.define (cols, config, alias)

     return Rol;

}