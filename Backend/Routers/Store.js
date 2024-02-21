const express = require('express');
const StoreController = require('../Controllers/Store');
const AuthMiddleware = require('../Middleware/Auth');
const route = express.Router();

route.post('/createStore/:userId/store', AuthMiddleware, StoreController.CreateStore);

module.exports = route;