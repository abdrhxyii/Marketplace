const Sequelize = require('sequelize');
const logger = require('../Log/Logger');
const sequelize = require('./DatabaseConfig');

describe('DatabaseConfig', () => {
  it('should connect to the test database', async () => {
    try {
      // Test if connection is established successfully
      await expect(sequelize.authenticate()).resolves.not.toThrow();
      logger.info('Database connection has been established successfully.');
    } catch (error) {
      logger.error('Unable to connect to the database:', error);
      throw error; // Rethrow the error to fail the test
    }
  });
});

module.exports = sequelize;
