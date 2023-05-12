module.exports = (sequelize, dataType) => {
  const ProductColor = sequelize.define(
    'ProductColor',
    {
      productId: dataType.INTEGER(11).UNSIGNED,
      colorId: dataType.INTEGER(11).UNSIGNED
    },
    {}
  );
  ProductColor.associate = function (models) {
    // Relación N:M entre Product y Color
    models.Product.belongsToMany(models.Color, {
      through: ProductColor,
      foreignKey: 'productId',
      otherKey: 'colorId',
    });
    models.Color.belongsToMany(models.Product, {
      through: ProductColor,
      foreignKey: 'colorId',
      otherKey: 'productId',
    });
  };
  return ProductColor;
};