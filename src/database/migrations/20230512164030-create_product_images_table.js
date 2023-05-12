'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('product_images', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('product_images', { 
      id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    url: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    product_id_images: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        references: {
          model:'products',
          key: 'id'
        }
    }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('product_images');
     */
    await queryInterface.dropTable('product_images');
  }
};
