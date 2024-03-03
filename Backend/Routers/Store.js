const express = require('express');
const StoreController = require('../Controllers/Store');
const JWTAuthMiddleware = require('../Middleware/Authentication')
const route = express.Router();

route.post('/createStore/:userId/store', JWTAuthMiddleware.verifyToken, StoreController.CreateStore);

module.exports = route;