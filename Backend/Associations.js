// const Category = require('./Modals/CategoryModal')
// const Product = require('./Modals/ProductModal')
// const Blog = require('./Modals/BlogModal')
// const Comment = require('./Modals/CommentModal')

// // 1 - many relationship
// Category.hasMany(Product, {
//     onDelete: 'CASCADE' // when a cate. s deleted all its asscoated products will be delete
// })
// Product.belongsTo(Category)

// Blog.hasMany(Comment, {
//     onDelete: 'CASCADE'
// })
// Comment.belongsTo(Blog)

// // Blog.hasMany(Comment, { foreignKey: 'blogId', onDelete: 'CASCADE' });
// // Comment.belongsTo(Blog, { foreignKey: 'blogId' });

// module.exports = {Category, Product, Blog, Comment}

const Category = require('./Modals/CategoryModal');
const Product = require('./Modals/ProductModal');
const Blog = require('./Modals/BlogModal');
const Comment = require('./Modals/CommentModal');

// 1 - many relationship
Category.hasMany(Product, {
    foreignKey: 'categoryId',
    onDelete: 'CASCADE' // when a category is deleted all its associated products will be deleted
});
Product.belongsTo(Category, {
    foreignKey: 'categoryId',
    onDelete: 'CASCADE'
});

Blog.hasMany(Comment, {
    foreignKey: 'BlogId',
    onDelete: 'CASCADE'
});
Comment.belongsTo(Blog, {
    foreignKey: 'BlogId',
    onDelete: 'CASCADE'
});

module.exports = { Category, Product, Blog, Comment };
