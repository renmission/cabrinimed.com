const Sequelize = require('sequelize');
const { sequelize } = require('../config/db');

module.exports = sequelize.define("news", {
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
    }
});