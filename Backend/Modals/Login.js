const Sequelize = require('sequelize')
const SequlizeConfig = require('../Config/DatabaseConfig')

const User = SequlizeConfig.define("User", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    email_address: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail: true
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

module.exports = User;