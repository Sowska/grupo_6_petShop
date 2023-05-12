'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('items', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('items', { 
      id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: {
        type: Sequelize.INTEGER(2),
    },
    cart_id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        references: {
          model:'carts',
          key: 'id'
        }
    },
    product_id: {
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
     * await queryInterface.dropTable('items');
     */
    await queryInterface.dropTable('items');
  }
};
