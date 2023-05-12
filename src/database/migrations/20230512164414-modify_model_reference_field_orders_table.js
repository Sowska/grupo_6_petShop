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
    await queryInterface.changeColumn('orders', 'cart_id_orders', {type: Sequelize.INTEGER(11).UNSIGNED,
      references: {
        model:'carts',
        key: 'id'
      }});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.changeColumn('orders', 'cart_id_orders', {type: Sequelize.INTEGER(11).UNSIGNED,
      references: {
        model:'cart',
        key: 'id'
      }});
  }
};