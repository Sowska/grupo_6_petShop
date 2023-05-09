module.exports = (sequelize,dataType) =>{
    const alias = 'User'; // Este nombre tiene que ser igual al nombre del archivo
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
            type: dataType.STRING(45),
            allowNull: false,
        },
        avatar_url: {
          type: dataType.STRING(45),
        },
        id_role: {
          type: dataType.INTERGER(11),
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

     User.associate = (models) => {
        User.BelongsTo(models.Cart, {
            as: 'carts',
            foreigKey: 'user_id'
        });
     }

     User.associate = (models) => {
        User.HasMany(models.Role, {
            as: 'role',
            foreigKey: 'id_role'
        });
     }

     return User;

}