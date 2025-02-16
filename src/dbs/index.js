require('dotenv').config();
const { Sequelize } = require('sequelize');

const { HOST, DATABASE, USER_DB, PASSWORD, ENVIRONMENT } = process.env;

const sequelize = new Sequelize(DATABASE, USER_DB, PASSWORD, {
    host: HOST,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    logging: false,
    define: {
        underscored: true,
    },
});

(async () => {
    try {
        await sequelize.authenticate();
        sequelize.sync({ force: false, alter: true });
        console.log('Connection has been established successfully');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = sequelize;
