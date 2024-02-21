const Sequelize = require('sequelize')
const SequlizeConfig = require('../Config/DatabaseConfig')

const Store = SequlizeConfig.define('Store', {
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    store_Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    store_owner: {
        type: Sequelize.STRING,
        allowNull: true
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
