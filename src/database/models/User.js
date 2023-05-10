module.exports = (sequelize, dataTypes) => {
    let alias = "Users";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        first_name: {
            type: dataTypes.STRING,
            allowNull: false
        } ,
        last_name:{
            type: dataTypes.STRING,
            allowNull: false
        } ,
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        password: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        avatar_url: {
            type: dataTypes.STRING,
            allowNull: true
        } ,
        id_role: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
            model: 'Roles',
            key: 'id'
            }
        }
    };

    let config = {
        tableName: "users",
        timestamps: false
    };
    const User = sequelize.define(alias, cols, config)

    return User;
}