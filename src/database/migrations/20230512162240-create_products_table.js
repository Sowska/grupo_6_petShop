'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('products', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('products', { 
      id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(45),
        allowNull: false,
    },
    description:{
        type: Sequelize.STRING(45),
        allowNull: false,
    },
    price:{
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
    },
    inStock:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    measure: {
      type: Sequelize.STRING(45)
  },
    flavor: {
        type: Sequelize.STRING(45),
        allowNull: true
    },
    fragrance: {
        type: Sequelize.STRING(45),
        allowNull: true
    },
    size: {
        type: Sequelize.CHAR(3),
        allowNull: true
    },
    pet: {
      type: Sequelize.STRING(45)
    },
    mainImage: {
      type: Sequelize.TEXT
    },
    discount_id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        references: {
          model:'discounts',
          key: 'id'
        },
        allowNull: true
    },
    material_id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        references: {
          model:'materials',
          key: 'id'
        },
        allowNull: true
        
    },
    category_id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        references: {
          model:'categories',
          key: 'id'
        },
        allowNull: true
    },
    creator: {
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
     * await queryInterface.dropTable('products');
     */
    await queryInterface.dropTable('products');
  }
};
