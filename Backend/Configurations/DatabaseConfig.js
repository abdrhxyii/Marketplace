const Sequelize = require('sequelize')

const databaseLogger = (msg) => {
    logger.info({
      label: 'sequelize',
      message: msg,
    });
  };

const sequelize = new Sequelize(
    'marketplace_db',
    'root',
    '123456',
    {
        host: "localhost",  
        dialect: 'mysql',
        logger: databaseLogger
    }
)

sequelize.authenticate();
module.exports = sequelize