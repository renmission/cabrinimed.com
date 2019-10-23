'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("services", {
      s_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      s_title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      s_slug: {
        type: Sequelize.STRING,
      },
      s_header: {
        type: Sequelize.STRING,
        allowNull: false
      },
      s_content: {
        type: Sequelize.STRING,
        allowNull: false
      },
      s_status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      s_keyword: {
        type: Sequelize.STRING,
        allowNull: false
      },
      s_description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      s_Image: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("services");
  }
};
