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

    await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: Sequelize.STRING(45),
        allowNull: false,
    },
    last_name:{
        type: Sequelize.STRING(45),
        allowNull: false,
    },
    email:{
        type: Sequelize.STRING(45),
        allowNull: false,
    },
    password:{
        type: Sequelize.TEXT,
        allowNull: false,
    },
    avatar_url: {
    type: Sequelize.TEXT,
    },
    id_role: {
    type: Sequelize.INTEGER(11).UNSIGNED,
      references: {
        model:'roles',
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

    await queryInterface.dropTable('users');
  }
};
