const Sequelize = require('sequelize')
const SequlizeConfig = require('../Config/DatabaseConfig')

const Product = SequlizeConfig.define('Product', {
    product_Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    product_Name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    product_Description: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    product_Location: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    // no. of days takes to delivery the product or come and take option
    product_Delivery_Detail: {
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
