const BlogController = require('../Controllers/Blogs');
const AuthMiddleware = require('../Middleware/Authentication')
const express = require('express')
const route = express.Router();

route.post('/createBlogs/:id', AuthMiddleware.verifyToken, BlogController.createBlog);
route.get('/getAllBlogs', BlogController.getAllBlogs);
route.get('/getBlog/:id', BlogController.getBlog)
route.get('/getBlog/:id/blogs', AuthMiddleware.verifyToken, BlogController.getBlogsByUser)

module.exports = route