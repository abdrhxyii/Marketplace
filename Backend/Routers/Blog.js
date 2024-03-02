const BlogController = require('../Controllers/Blogs');
const express = require('express')
const route = express.Router();

route.post('/createBlogs', BlogController.createBlog);
route.get('/getAllBlogs', BlogController.getAllBlogs);
route.get('/getBlog/:id', BlogController.getBlog)

module.exports = route


