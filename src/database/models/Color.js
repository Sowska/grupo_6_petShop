module.exports = (sequelize, dataTypes) => {
    let alias = "Colors";
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
        tableName: "colors",
        timestamps: false,
    };
    const Color = sequelize.define(alias, cols, config)

    return Color;
}