'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("news", {
      nf_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nf_title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nf_slug: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nf_header: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nf_content: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nf_img: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nf_keyword: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nf_description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("news");
  }
};
