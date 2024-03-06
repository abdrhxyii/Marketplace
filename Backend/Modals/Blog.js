const SequelizeConfig = require('../Config/DatabaseConfig');
const User = require('./Auth')
const Sequelize = require('sequelize')

const Blog = SequelizeConfig.define('Blog', {
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
    image: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true
    }
})

module.exports = Blog;