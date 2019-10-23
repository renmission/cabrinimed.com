const Sequelize = require('sequelize');
const { sequelize } = require('../config/db');

module.exports = sequelize.define('lkup_doctor_clinic', {
    id_clinic: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    ClinicDesc: {
        type: Sequelize.STRING,
        allowNull: false
    }
});