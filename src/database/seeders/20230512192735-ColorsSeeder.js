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
        name: 'Rojo'
      },
      {
        name: 'Naranja'
      },
      {
        name: 'Amarillo'
      },
      {
        name: 'Verde'
      },
      {
        name: 'Azul'
      },
      {
        name: 'Violeta'
      },
      {
        name: 'Rosa'
      },
      {
        name: 'Negro'
      },
      {
        name: 'Blanco'
      },
      {
        name: 'Gris'
      },
      {
        name: 'No definido'
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
