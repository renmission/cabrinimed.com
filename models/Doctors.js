const Sequelize = require('sequelize');
const { sequelize } = require('../config/db');

module.exports = sequelize.define('lkup_doctor_master', {
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
        type: Sequelize.INTEGER,
        allowNull: false,
        required: true
    },
    SUBSPECIALTY: {
        type: Sequelize.INTEGER,
        allowNull: false,
        required: true
    }
});