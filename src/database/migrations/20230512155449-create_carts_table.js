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
    await queryInterface.createTable('carts', { 
      id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,

    },
    created_at: {
        type: Sequelize.DATE,
        allowNull: false
    },
    total: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
    },
    user_id: {
      type: Sequelize.INTEGER(11).UNSIGNED,
      references: {
        model:'users',
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
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('carts');
  }
};
