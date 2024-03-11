const BlogController = require('../Controllers/Blogs');
const AuthMiddleware = require('../Middleware/Authentication')
const express = require('express')
const route = express.Router();

route.post('/create/:id', AuthMiddleware.verifyToken, BlogController.createBlog);
route.get('/blogs', BlogController.getAllBlogs);
route.get('/blog/:id', BlogController.getBlog)
route.get('/blog/:id/blogs', AuthMiddleware.verifyToken, BlogController.getBlogsByUser)

module.exports = route