module.exports = (sequelize,dataType) =>{
    const alias = 'User'; 
    const cols = {
        id: {
            type: dataType.INTEGER(11).UNSIGNED,
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
            type: dataType.TEXT,
            allowNull: false,
        },
        avatar_url: {
        type: dataType.STRING(45),
        },
        id_role: {
        type: dataType.INTEGER(11),
        }
        
    }
    const config = {
        tableName: 'users',
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config)

    User.associate = (models) => {
        User.hasMany(models.Cart, {
            as: 'cart',
            foreignKey: 'user_id'
        });
    
        User.belongsTo(models.Role, {
            as: 'role',
            foreignKey: 'id_role'
        });
    }

    return User;

}