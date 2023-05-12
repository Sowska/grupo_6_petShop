'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductColors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11).UNSIGNED,
      },
      productId: {
        type: Sequelize.INTEGER(11).UNSIGNED,
      },
      colorId: {
        type: Sequelize.INTEGER(11).UNSIGNED,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProductColors');
  }
};