const Sequelize = require('sequelize');
const db = {};

const sequelize = new Sequelize(
    'torreste_cabrinimed',
    'root',
    '',
    {
        host: '127.0.0.1',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    });
db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;
