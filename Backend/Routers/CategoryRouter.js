const express = require('express')
const route = express.Router()
const CategoryController = require('../Controllers/CategoryController');

route.post('/', CategoryController.CreateCategory)
route.get('/', CategoryController.GetAllCategory)

module.exports = route