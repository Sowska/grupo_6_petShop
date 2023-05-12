'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('colors', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('colors', [
      {
        name: 'Red'
      },
      {
        name: 'Orange'
      },
      {
        name: 'Yellow'
      },
      {
        name: 'Green'
      },
      {
        name: 'Blue'
      },
      {
        name: 'Violet'
      },
      {
        name: 'Pink'
      },
      {
        name: 'Black'
      },
      {
        name: 'White'
      },
      {
        name: 'Grey'
      }
    ]
      , {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('colors', null, {});
     */
    await queryInterface.bulkDelete('colors', null, {});
  }
};
