const SequelizeConfig = require('../Configurations/DatabaseConfig');
const Sequelize = require('sequelize')

const Blog = SequelizeConfig.define('Blog', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
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