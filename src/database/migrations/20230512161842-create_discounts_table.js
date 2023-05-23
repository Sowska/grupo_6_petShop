'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('discounts', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('discounts', { 
      id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    percentage: {
        type: Sequelize.INTEGER(2),
        allowNull: false
    }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('discounts');
     */
    await queryInterface.dropTable('discounts');
  }
};
