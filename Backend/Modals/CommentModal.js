const SequelizeConfig = require('../Configurations/DatabaseConfig');
const Sequelize = require('sequelize');
const Blog = require('../Modals/BlogModal')

const Comment = SequelizeConfig.define('Comments', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    BlogId: {
        type: Sequelize.INTEGER,
        references: {
            model:  Blog,
            key: 'id'
        },
    },
    comment_des: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

module.exports = Comment;