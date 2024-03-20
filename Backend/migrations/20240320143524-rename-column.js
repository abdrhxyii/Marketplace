'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Products', 'product_Name', 'name');
    await queryInterface.renameColumn('Products', 'product_Id', 'id');
    await queryInterface.renameColumn('Products', 'product_Description', 'description');
    await queryInterface.renameColumn('Products', 'product_Location', 'location');
    await queryInterface.renameColumn('Products', 'product_Delivery_Detail', 'delivery_info');

  
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
