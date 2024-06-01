const Sequelize = require('sequelize')
const SequlizeConfig = require('../Configurations/DatabaseConfig')

const Category = SequlizeConfig.define('Category', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = Category