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
    models.Product.belongsToMany(models.Color, {
      through: ProductColor,
      foreignKey: 'productId'
    });
    models.Color.belongsToMany(models.Product, {
      through: ProductColor,
      foreignKey: 'colorId'
    });
  };
  return ProductColor;
};