const express = require('express');
const route = express.Router();
const multer = require('multer');
const productController = require('../Controllers/ProductController');
const authMiddleware = require('../Middlewares/AuthMiddleware');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

route.post('/', upload.single('image'), authMiddleware.verifyToken, authMiddleware.AdminMiddleware, productController.createProduct);
route.get('/:id', productController.GetProductById)
route.get('/category/:id', productController.getProductsByCategory)

module.exports = route;
