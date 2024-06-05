const Sequelize = require('sequelize');
const logger = require('../Log/Logger');

const databaseLogger = (msg) => {
  logger.info({
    label: 'sequelize',
    message: msg,
  });
};

const database = process.env.NODE_ENV === 'test' ? 'marketplace_test_db' : 'marketplace_db';

const sequelize = new Sequelize(
  database,
  'root',
  '123456',
  {
    host: "localhost",
    dialect: 'mysql',
    logging: databaseLogger
  }
);

sequelize.authenticate();
module.exports = sequelize;
