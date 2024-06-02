const BlogController = require('../Controllers/BlogController');
const AuthMiddleware = require('../Middlewares/AuthMiddleware')
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

route.post('/', upload.single('image'), AuthMiddleware.verifyToken, AuthMiddleware.AdminMiddleware, BlogController.createBlog);
route.get('/', BlogController.getAllBlogs);
route.get('/:id', BlogController.getBlog)
route.delete( '/:id',  AuthMiddleware.verifyToken, AuthMiddleware.AdminMiddleware, BlogController.deleteBlogs)

module.exports = route