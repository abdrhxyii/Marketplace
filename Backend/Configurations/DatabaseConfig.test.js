const Sequelize = require('sequelize');
const logger = require('../Log/Logger');
const sequelize = require('./DatabaseConfig')

describe('DatabaseConfig', () => {
  it('should connect to the test database', async () => {
    // Test if connection is established successfully
    await expect(sequelize.authenticate()).resolves.not.toThrow();
  });
});

module.exports = sequelize;
