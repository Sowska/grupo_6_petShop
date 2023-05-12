module.exports = (sequelize,dataType) =>{
    const alias = 'Role'; 
    const cols = {
        id: {
            type: dataType.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataType.BOOLEAN,
        }

    }
    const config = {
        tableName: 'roles',
        timestamps:false
    }
    const Role = sequelize.define(alias, cols, config)

    Role.associate = (models) => {
    
        Role.hasMany(models.User, {
            as: 'user',
            foreignKey: 'id_role'
        });
    }

    return Role;

}