module.exports = (sequelize,dataType) =>{
    const alias = 'Role'; // Este nombre tiene que ser igual al nombre del archivo
    const cols = {
        id: {
            type: dataType.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        role: {
            type: dataType.INTERGER(11),
        }
 
    }
    const config = {
        tableName: 'roles',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
     const Role = sequelize.define (cols, config, alias)

     return Role;

}