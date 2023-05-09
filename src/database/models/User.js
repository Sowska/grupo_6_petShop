module.exports = (sequelize,dataType) =>{
    const alias = 'User'; // Este nombre tiene que ser igual al nombre del archivo
    const cols = {
        id: {
            type: dataType.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        firs_name: {
            type: dataType.STRING(45),
            allowNull: false,
        },
        last_name:{
            type: dataType.STRING(45),
            allowNull: false,
        },
        email:{
            type: dataType.STRING(45),
            allowNull: false,
        },
        password:{
            type: dataType.STRING(45),
            allowNull: false,
        }
    }
    const config = {
        tableName: 'users',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
     const User = sequelize.define (cols, config, alias)

     return User;

}