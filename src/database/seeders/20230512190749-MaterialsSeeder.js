'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('materials', [
      {
      name: 'Algodón'
      },
      {
      name: 'Cañamo'
      },
      {
      name: 'Bambú'
      },
      {
      name: 'Lino'
      },
      {
      name: 'Nylon'
      },
      {
      name: 'Metal'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('materials', null, {});
  }
};
