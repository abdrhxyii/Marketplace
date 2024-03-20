const express = require('express')
const route = express.Router()
const multer = require('multer')
const productController = require('../Controllers/Product')
const authMiddleware = require('../Middleware/Authentication')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images/products/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, uniqueSuffix + file.originalname);
    }
  })
  
const upload = multer({ storage: storage })

route.post('/create', upload.single('image'), authMiddleware.verifyToken, productController.createProduct)


module.exports = route