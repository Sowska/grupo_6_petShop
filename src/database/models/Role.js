module.exports = (sequelize, dataTypes) => {
    let alias = "Roles";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        role: {
            type: dataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    };

    let config = {
        tableName: "roles",
        timestamps: false
    };
    const Role = sequelize.define(alias, cols, config)

    return Role;
}