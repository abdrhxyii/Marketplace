const Sequelize = require('sequelize')
const SequlizeConfig = require('../Config/DatabaseConfig')
const User = require('./Auth')

const Store = SequlizeConfig.define('Store', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userId: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    store_Name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    store_Description: {
        type: Sequelize.TEXT,
        allowNull: true
    }
});

module.exports = Store
