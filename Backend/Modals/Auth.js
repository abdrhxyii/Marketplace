const Sequelize = require('sequelize')
const SequlizeConfig = require('../Config/DatabaseConfig')

const User = SequlizeConfig.define("User", {
    uid: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    email: {
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
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    isEmailVerified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
})

module.exports = User;