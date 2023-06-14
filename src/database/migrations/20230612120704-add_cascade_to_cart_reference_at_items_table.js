'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn('items', 'cart_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'carts',
        key: 'id',
        onDelete: 'CASCADE' // Agregar la opción onDelete: 'CASCADE'
      },
      onUpdate: 'CASCADE'
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.changeColumn('items', 'cart_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'carts',
        key: 'id',
        onDelete: 'RESTRICT'
      },
      onUpdate: 'CASCADE'
    });
  }
};
