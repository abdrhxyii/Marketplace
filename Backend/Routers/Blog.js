const BlogController = require('../Controllers/Blogs');
const AuthMiddleware = require('../Middleware/Authentication')
const express = require('express')
const route = express.Router();

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, uniqueSuffix + file.originalname);
    }
  })
  
const upload = multer({ storage: storage })

route.post('/create/:id', upload.single('image'), AuthMiddleware.verifyToken, BlogController.createBlog);
route.get('/blogs', BlogController.getAllBlogs);
route.get('/blog/:id', BlogController.getBlog)
route.get('/:id/blogs', AuthMiddleware.verifyToken, BlogController.getBlogsByUser)
route.delete( '/delete' , BlogController.deleteBlogs)

module.exports = route