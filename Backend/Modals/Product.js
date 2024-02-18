const Sequelize = require('sequelize')
const SequlizeConfig = require('../Config/DatabaseConfig')

const Product = SequlizeConfig.define('Product', {
    product_Id: {
        type: Sequelize.STRING,
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
    product_Delivery_Detail: {
        type: Sequelize.STRING,
        allowNull: false
    },
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
