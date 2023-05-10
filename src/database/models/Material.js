module.exports = (sequelize, dataTypes) => {
    let alias = "Materials";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        value: {
            type: dataTypes.STRING,
            allowNull: false
        }
    };

    let config = {
        tableName: "materials",
        timestamps: false,
    };
    const Material = sequelize.define(alias, cols, config)

    return Material;
}