const BlogController = require('../Controllers/Blogs');
const AuthMiddleware = require('../Middleware/Authentication')
const express = require('express')
const route = express.Router();

route.post('/createBlogs', AuthMiddleware.verifyToken, BlogController.createBlog);
route.get('/getAllBlogs', BlogController.getAllBlogs);
route.get('/getBlog/:id', BlogController.getBlog)

module.exports = route