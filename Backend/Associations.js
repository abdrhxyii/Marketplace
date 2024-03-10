const Product = require('./Modals/Product');
const Store = require('./Modals/Store');
const User = require('./Modals/Auth'); // auth has the users information.. such as email/pass/uid/token
const Blog = require('./Modals/Blog');

//1 : many Relationship
// A store will have many products 
// Store.hasMany(Product, {
//     foreignKey: 'store_Id'
// })

// many : 1 relationship
// many product can hav one store only
// Product.belongTo(Store, {
//     foreignKey: 'product_Id'
// })

// many : 1 relationship
Blog.belongsTo(User); // This assumes each blog belongs to one user/ Many blogs can have one user

// 1 : many relationship
User.hasMany(Blog);    // This assumes each user has many blogs/ User can have many blogs


// authenticated user can create only one store and a store can have only one user
User.hasOne(Store)
Store.belongsTo(User)

module.exports = {Blog, User, Store}