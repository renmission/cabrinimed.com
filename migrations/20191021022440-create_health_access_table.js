'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('health_access', {
      ha_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      ha_title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ha_ytb_link: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ha_content: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ha_author: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ha_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      ha_status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ha_keyword: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ha_description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("health_access");
  }
};
