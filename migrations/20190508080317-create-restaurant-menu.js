"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("RestaurantMenus", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      restaurantId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      imageUrl: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DOUBLE
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("RestaurantMenus");
  }
};
