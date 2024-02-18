const Product = require('./Modals/Product')
const Store = require('./Modals/Store')
const Auth = require('./Modals/Auth') // auth has the users information.. such as email/pass/uid/token

//1 : many Relationship
// A store will have many products 
Store.hasMany(Product, {
    foreignKey: 'store_Id'
})

// many : 1 relation
// many product can hav one store only
Product.belongTo(Store, {
    foreignKey: 'product_Id'
})