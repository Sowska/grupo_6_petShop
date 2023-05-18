'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     * 
     */
    await queryInterface.addColumn('Products', 'pet', {
      type: Sequelize.STRING(45)
    });

    await queryInterface.addColumn('Products', 'mainImage', {
      type: Sequelize.TEXT,
    });

    await queryInterface.addColumn('Products', 'creator', {
      type: Sequelize.INTEGER(11).UNSIGNED,
        references: {
          model:'users',
          key: 'id'
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
    await queryInterface.removeColumn('Products', 'pet');
    await queryInterface.removeColumn('Products', 'mainImage');
    await queryInterface.removeColumn('Products', 'creator');
  }
};
