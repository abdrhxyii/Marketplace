const Sequelize = require('sequelize')
const SequlizeConfig = require('../Config/DatabaseConfig')

const Product = SequlizeConfig.define('Product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    image: {
        type: Sequelize.BLOB,
        allowNull: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    location: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    // no. of days takes to delivery the product or come and take option
    delivery_info: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // Free or Include Cost
    shipping_details: {
        type: Sequelize.STRING,
        allowNull: false
    },
    available_quantity: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
});

module.exports = Product
