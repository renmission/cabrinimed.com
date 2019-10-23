const Sequelize = require('sequelize');
const { sequelize } = require('../config/db');

module.exports = sequelize.define('lkup_doctor_specialty', {
    id_dscpecialty: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    specialty: {
        type: Sequelize.STRING,
        allowNull: false
    },
    department: {
        type: Sequelize.STRING,
        allowNull: false
    }
});