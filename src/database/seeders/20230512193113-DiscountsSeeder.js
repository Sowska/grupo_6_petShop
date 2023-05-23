'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('discounts', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('discounts', [
      {
        percentage: 0
      },
      {
        percentage: 5
      },
      {
        percentage: 10
      },
      {
        percentage: 15
      },
      {
        percentage: 20
      },
      {
        percentage: 25
      },
      {
        percentage: 30
      },
      {
        percentage: 35
      },
      {
        percentage: 40
      },
      {
        percentage: 45
      },
      {
        percentage: 50
      },
      {
        percentage: 55
      },
      {
        percentage: 60
      },
      {
        percentage: 65
      },
      {
        percentage: 70
      },
      {
        percentage: 75
      },
      {
        percentage: 80
      },
      {
        percentage: 85
      },
      {
        percentage: 90
      },
      {
        percentage: 95
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('discounts', null, {});
     */
    await queryInterface.bulkDelete('discounts', null, {});
  }
};
