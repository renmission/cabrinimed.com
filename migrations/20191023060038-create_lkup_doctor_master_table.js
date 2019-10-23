'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('lkup_doctor_master', {
      id_dCtrl: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      DoctorFullName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      LastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      FirstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Midname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      MD: {
        type: Sequelize.STRING,
        allowNull: false
      },
      DIPLOMATE: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ClinicRoom: {
        type: Sequelize.STRING,
        allowNull: false
      },
      SUBSPECIALTY: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },


  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('lkup_doctor_master')
  }
};
