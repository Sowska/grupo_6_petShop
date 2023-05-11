module.exports = (sequelize,dataType) =>{
    const alias = 'Role'; 
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
        timestamps:false
    }
    const Role = sequelize.define (cols, config, alias)

    Role.associate = (models) => {
    
        Role.hasMany(models.User, {
            as: 'user',
            foreigKey: 'id_role'
        });
    }

    return Role;

}